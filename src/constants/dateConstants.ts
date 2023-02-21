export const YEAR_OPTIONS = Array.from(
  { length: 30 },
  (_item, index) => new Date().getFullYear() - index
).sort((a, b) => b - a);

export const MONTHS_OPTIONS = Array.from({ length: 12 }, (_item, index) =>
  index < 9 ? "0" + `${index + 1}` : `${index + 1}`
).sort((a, b) => Number(b) - Number(a));
