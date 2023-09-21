export const requestHelper = ({ method, odata, action = '', cookies, token }) => {
  return {
    method,
    uri: `${process.env.SAP_URL_TEST}sap/byd/odata/cust/v1/${odata}/${action}`,
    jar: cookies,
    headers: {
      Authorization: 'Bearer ' + btoa(`${process.env.SAP_USERNAME_TEST}:${process.env.SAP_PASSWORD_TEST}`),
      'Content-Type': 'application/json',
      'x-csrf-token': token
    }
  }
}
