import request from 'request'
import { CREDENTIALS } from '../../../constants/constants.js'

async function main () {
  const data = process.argv.slice(2)
  if (data[0] === '' || data[0] === '[]' || data[0] === '{"ObjectID":null}') {
    const error = { message: 'Error: ObjectID de la oportunidad es requerido en la solicitud', code: 400 }
    console.log(JSON.stringify(error))
  }
  const dataParsed = JSON.parse(data[0])
  const opportunity = dataParsed.ObjectID
  const cookies = request.jar()
  request({
    method: 'GET',
    uri: `${CREDENTIALS.urlTest}sap/byd/odata/cust/v1/khopportunity`,
    jar: cookies,
    headers: {
      Authorization: 'Basic ' + btoa(`${CREDENTIALS.authTest.username}:${CREDENTIALS.authTest.password}`),
      'Content-Type': 'application/json',
      'x-csrf-token': 'fetch'
    }
  }, (_error, response, body) => {
    try {
      const csrfToken = response.headers['x-csrf-token']
      if (!csrfToken) {
        const danger = { message: 'Error al obtener el Token SAP', code: 500 }
        console.log(JSON.stringify(danger))
      }

      request({
        method: 'PATCH',
        url: `${CREDENTIALS.urlTest}sap/byd/odata/cust/v1/khopportunity/OpportunityCollection('${opportunity}')`,
        jar: cookies,
        headers: {
          Authorization: 'Basic ' + btoa(`${CREDENTIALS.authTest.username}:${CREDENTIALS.authTest.password}`),
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'x-csrf-token': csrfToken
        },
        json: dataParsed
      }, (_error, response, body) => {
        try {
          if (response.statusCode !== 204) {
            throw new Error('Error: No se pudo actualizar la oportunidad')
          }
          const result = { code: response.statusCode, message: 'Oportunidad Actualizada y Estado Actualizado!!', resultCode: dataParsed }
          console.log(JSON.stringify(result))
        } catch (error) {
          const danger = { code: response.statusCode, message: 'Error al generar el La actualizacion de la oportunidad en SAP' }
          console.log(JSON.stringify(danger))
        }
      })
    } catch (error) {
      const danger = { message: 'Hubo un error al generar la solicitud', code: response.statusCode }
      console.log(JSON.stringify(danger))
    }
  })
}

main()
