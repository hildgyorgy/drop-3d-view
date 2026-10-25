// Small generation gate for async work where only the newest request may
// commit shared application state.
export function createLatestRequestGate() {
  let generation = 0;

  return {
    begin() {
      const requestGeneration = ++generation;
      return {
        isCurrent: () => requestGeneration === generation
      };
    }
  };
}
