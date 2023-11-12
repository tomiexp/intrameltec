export const priceFormatted = ({ price, currency = 'USD' }) => {
  const options = {
    style: 'currency',
    currency,
    minimumFractionDigits: 2
  }

  const priceFormatted = price.toLocaleString('es-CO', options)

  return priceFormatted
}
