export const dateFormatted = (date) => {
  const dateInit = date
  const fechaObj = new Date(dateInit)
  const timestamp = fechaObj.getTime() / 1000

  return timestamp
}
