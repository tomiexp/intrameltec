import request from 'request'
import { CREDENTIALS } from '../../../constants/constants.js'

async function main () {
  const data = process.argv.slice(2)
  const dataParsed = JSON.parse(data[0])

  const cookies = request.jar()

  try {
    request({
      method: 'GET',
      uri: `${CREDENTIALS.urlTest}sap/byd/odata/cust/v1/khopportunity`,
      jar: cookies,
      headers: {
        Authorization: 'Basic ' + btoa(`${CREDENTIALS.authTest.username}:${CREDENTIALS.authTest.password}`),
        'Content-Type': 'application/json',
        'x-csrf-token': 'fetch'
      }
    }, (error, response, body) => {
      if (!error) {
        const csrfToken = response.headers['x-csrf-token']
        const dataSend = dataParsed
        request({
          method: 'POST',
          url: `${CREDENTIALS.urlTest}sap/byd/odata/cust/v1/khopportunity/OpportunityCollection`,
          jar: cookies,
          headers: {
            Authorization: 'Basic ' + btoa(`${CREDENTIALS.authTest.username}:${CREDENTIALS.authTest.password}`),
            'Content-Type': 'application/json',
            'x-csrf-token': csrfToken
          },
          json: dataSend
        }, async (_error, response, body) => {
          try {
            if (response.statusCode !== 201) {
              throw new Error('Error al enviar la solicitud')
            } else {
              console.log(response.statusCode, body.d.results)
            //   res.status(response.statusCode).send(body.d.results).end()
            }
          } catch (err) {
            // res.status(response.statusCode).send(body.error.message.value).end()
            console.log(response.statusCode, err, body.error.message.value)
          }
        })
      } else {
        console.log(response.statusCode, body.error.message.value)
        // res.status(response.statusCode).send(body.error.message.value).end()
      }
    })
  } catch (error) {
    console.error(error)
  }

  console.log(dataParsed)
}

main()

/**
 *
  try {
    request({
      method: 'GET',
      uri: `${process.env.SAP_URL_TEST}sap/byd/odata/cust/v1/khopportunity`,
      jar: cookies,
      headers: {
        Authorization: 'Basic ' + btoa(`${process.env.SAP_USERNAME_TEST}:${process.env.SAP_PASSWORD_TEST}`),
        'Content-Type': 'application/json',
        'x-csrf-token': 'fetch'
      }
    }, (error, response, body) => {
      if (!error) {
        const csrfToken = response.headers['x-csrf-token']
        const dataSend = req.body
        request({
          method: 'POST',
          url: `${process.env.SAP_URL_TEST}sap/byd/odata/cust/v1/khopportunity/OpportunityCollection`,
          jar: cookies,
          headers: {
            Authorization: 'Basic ' + btoa(`${process.env.SAP_USERNAME_TEST}:${process.env.SAP_PASSWORD_TEST}`),
            'Content-Type': 'application/json',
            'x-csrf-token': csrfToken
          },
          json: dataSend
        }, async (_error, response, body) => {
          try {
            if (response.statusCode !== 201) {
              throw new Error('Error al enviar la solicitud')
            } else {
              console.log(response.statusCode)
              res.status(response.statusCode).send(body.d.results).end()
            }
          } catch (err) {
            res.status(response.statusCode).send(body.error.message.value).end()
            console.log(_error)
          }
        })
      } else {
        res.status(response.statusCode).send(body.error.message.value).end()
      }
    })
  } catch (error) {
    res.status(400).send(error).end()
  }
 */
