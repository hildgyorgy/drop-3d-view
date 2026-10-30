const activeStates = new Set(["loading", "rendering", "paused"]);

export class RenderQueue {
  constructor(records = []) {
    this.items = records.filter(item => item?.id && item.file instanceof Blob).map(item => ({
      ...item, file: item.file instanceof File ? item.file : new File([item.file], item.name),
      state: activeStates.has(item.state) ? "queued" : item.state,
      samples: activeStates.has(item.state) ? 0 : item.samples
    }));
    this.selectedId = this.items[0]?.id ?? null;
  }
  get selected() { return this.items.find(item => item.id === this.selectedId); }
  get next() { return this.items.find(item => item.state === "queued"); }
  add(files) {
    const added = [...files].filter(file => /\.dvrender$/i.test(file.name)).map(file => ({
      id: crypto.randomUUID(), name: file.name, file, state: "queued", samples: 0,
      order: this.items.length, output: null, outputName: null
    }));
    this.items.push(...added);
    this.reindex();
    if (!this.selectedId) this.selectedId = added[0]?.id ?? null;
    return added;
  }
  reindex() { this.items.forEach((item, index) => { item.order = index; }); }
  move(id, delta) {
    const from = this.items.findIndex(item => item.id === id);
    const to = from + delta;
    if (from < 0 || to < 0 || to >= this.items.length ||
        activeStates.has(this.items[from].state) || activeStates.has(this.items[to].state)) return false;
    [this.items[from], this.items[to]] = [this.items[to], this.items[from]];
    this.reindex();
    return true;
  }
  remove(id) {
    const item = this.items.find(item => item.id === id);
    if (!item || activeStates.has(item.state)) return false;
    this.items = this.items.filter(item => item.id !== id);
    if (this.selectedId === id) this.selectedId = this.items[0]?.id ?? null;
    this.reindex();
    return true;
  }
}

export function renderQueueOutputName(packageName, workerName) {
  const base = packageName.replace(/\.dvrender$/i, "").replace(/[^a-z0-9._-]+/gi, "-");
  const suffix = workerName.match(/\d+x\d+_\d+s\.png$/i)?.[0] ?? "render.png";
  return `${base}_${suffix}`;
}
