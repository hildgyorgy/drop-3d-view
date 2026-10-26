// Choose real-world subdivisions while keeping their screen density readable.
export function measurementScale(distance, pixels) {
  if (!(distance > 0) || !(pixels > 0)) return null;
  const desired = (distance * 8) / pixels;
  const power = 10 ** Math.floor(Math.log10(desired));
  const step = [1, 2, 5, 10].map(value => value * power).find(value => value >= desired);
  return { step, count: Math.min(500, Math.floor(distance / step + 1e-9)) };
}

export function formatMeasurement(metres) {
  return `${metres.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })} m`;
}
