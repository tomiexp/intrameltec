// import request from 'request'
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
    console.log(data)
    return { data }
  } catch (error) {
    console.errpr(error)
  }
}

export default async function getOpportunities (req, res) {
  const { data } = await opportunities()
  res.setHeader('Content-Type', 'application/json')
  res.send(data)
}
