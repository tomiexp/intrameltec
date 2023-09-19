export const priceFormatted = (price) => {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }

  const priceFormatted = price.toLocaleString('es-CO', options)

  return priceFormatted
}
