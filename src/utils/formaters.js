/**
 * Formats number like 100000000 => 100 000 000
 * @param x - number - source tah will be formatted;
 * @param gag - string - will be returned if `x` is not number;
 * @returns {string}
 */
export function formatNumber(x, gag) {
  if (!x) return gag || '';
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join('.');
}
