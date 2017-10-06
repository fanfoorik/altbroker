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

export function formatToPassportSeries(value) {
  value.slice(0, 4);

  return `${value.slice(0, 2)}${value.slice(2, 4) ? ' ' + value.slice(2, 4) : ''}`;
}

export function formatToPassportNumber(value) {
  let formatValue = value.slice(0, 6);

  return formatValue;
}
