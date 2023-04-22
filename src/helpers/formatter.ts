/**
 * Formatter object for currency values in US Dollars.
 */
export const currencyFormatter: Intl.NumberFormat = new Intl.NumberFormat(
  'en-US',
  {
    style: 'currency',
    currency: 'USD',
  }
);
