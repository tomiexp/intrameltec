import request from 'request'
import axios from 'axios'

const opportunities = async () => {
  const url = `${process.env.SAP_URL_PRODUCCTION}sap/byd/odata/cust/v1/khopportunity/OpportunityCollection?$format=json&$expand=DocumentReference,EmployeeResponsible/EmployeeResponsibleName,ProspectParty/ProspectPartyName,SalesBusinessArea,SalesUnit/SalesUnitName,Text,Item`
  const res = await axios.get(url, {
    auth: {
      username: process.env.SAP_USERNAME_PRODUCTION,
      password: process.env.SAP_PASSWORD_PRODUCTION
    }
  })

  try {
    const data = res.data.d.results
    return { data }
  } catch (error) {
    console.error(error)
  }
}

export async function getOpportunities (req, res) {
  const { data } = await opportunities()
  res.setHeader('Content-Type', 'application/json')
  res.send(data)
}

export const postOpportunity = async (req, res) => {
  console.log(req.body)
  const cookies = request.jar()
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
        throw new Error('Error al obtener el Token CSRF')
      }
    })
  } catch (error) {
    res.status(400).send(error).end()
  }
}
