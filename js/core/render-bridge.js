// Versioned separately from .dvrender. Credentials stay in memory in this tab.
export const RENDER_BRIDGE_URL = "http://127.0.0.1:43127";

export class RenderBridgeClient {
  constructor(fetcher = globalThis.fetch.bind(globalThis)) {
    this.fetcher = fetcher;
    this.token = null;
  }

  async request(path, { method = "GET", timeout = 8000, body, headers = {} } = {}) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);
    try {
      const response = await this.fetcher(`${RENDER_BRIDGE_URL}/v1/${path}`, {
        method,
        mode: "cors",
        credentials: "omit",
        cache: "no-store",
        redirect: "error",
        targetAddressSpace: "loopback",
        body,
        headers: {
          ...headers,
          ...(this.token ? { Authorization: `Bearer ${this.token}` } : {})
        },
        signal: controller.signal
      });
      const data = await response.json();
      if (!response.ok) {
        if (response.status === 401) this.token = null;
        const error = new Error(data.message || data.error || `HTTP ${response.status}`);
        error.code = data.error;
        error.status = response.status;
        throw error;
      }
      return data;
    } finally {
      clearTimeout(timer);
    }
  }

  async connect() {
    if (!this.token) {
      const pairing = await this.request("pair", { method: "POST", timeout: 115000 });
      if (
        pairing.protocolVersion !== 1 ||
        !/^[A-Fa-f0-9-]{72}$/.test(pairing.token ?? "")
      ) {
        throw new Error("Incompatible Drop & View Render bridge");
      }
      this.token = pairing.token;
    }
    return this.status();
  }

  async status() {
    const status = await this.request("status");
    if (status.app !== "Drop & View Render" || status.protocolVersion !== 1) {
      this.token = null;
      throw new Error("Incompatible Drop & View Render bridge");
    }
    return status;
  }

  async disconnect() {
    try {
      if (this.token) await this.request("pair", { method: "DELETE" });
    } finally {
      this.token = null;
    }
  }

  async submit(snapshot, key) {
    if (!this.token) throw new Error("Connect to Drop & View Render first.");
    return this.request("jobs", {
      method: "POST",
      timeout: 590000,
      body: snapshot,
      headers: {
        "Content-Type": "application/octet-stream",
        "Idempotency-Key": key,
        "X-DVR-Settings": JSON.stringify({ version: 1, profile: "recommended" })
      }
    });
  }

  job(id) {
    return this.request(`jobs/${encodeURIComponent(id)}`);
  }
  cancel(id) {
    return this.request(`jobs/${encodeURIComponent(id)}/cancel`, { method: "POST" });
  }
  reveal(id) {
    return this.request(`jobs/${encodeURIComponent(id)}/reveal`, { method: "POST" });
  }
}
