/**
 * Formats number like 100000000 => 100 000 000
 * @param x - number
 * @returns {string}
 */
export function formatNumber(x) {
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join('.');
}
