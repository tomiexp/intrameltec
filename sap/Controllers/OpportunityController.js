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
  const cookies = request.jar()
  try {
    request({
      method: 'GET',
      uri: `${process.env.SAP_URL_PRODUCCTION}sap/byd/odata/cust/v1/khopportunity`,
      jar: cookies,
      headers: {
        Authorization: 'Basic ' + btoa(`${process.env.SAP_USERNAME_PRODUCTION}:${process.env.SAP_PASSWORD_PRODUCTION}`),
        'Content-Type': 'application/json',
        'x-csrf-token': 'fetch'
      }
    }, (error, response, body) => {
      if (!error) {
        const csrfToken = response.headers['x-csrf-token']
        const dataSend = req.body
        request({
          method: 'POST',
          url: `${process.env.SAP_URL_PRODUCCTION}sap/byd/odata/cust/v1/khopportunity/OpportunityCollection`,
          jar: cookies,
          headers: {
            Authorization: 'Basic ' + btoa(`${process.env.SAP_USERNAME_PRODUCTION}:${process.env.SAP_PASSWORD_PRODUCTION}`),
            'Content-Type': 'application/json',
            'x-csrf-token': csrfToken
          },
          json: dataSend
        }, async (error, response, body) => {
          if (!error) {
            console.log(response.statusCode)
            res.send(body.d.results)
          } else {
            throw new Error('Error al generar la nueca Oportunidad')
          }
        })
      } else {
        throw new Error('Error al obtener el Token CSRF')
      }
    })
  } catch (error) {
    res.send(error)
  }
}
