export const dateFormatter = (date) => {
  const fecha = new Date(date)
  const dateFormatted = fecha.toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  return dateFormatted
}
