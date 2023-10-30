import axios from 'axios'

import { CREDENTIALS } from '../../../constants/constants.js'

async function main () {
  try {
    const url = `${CREDENTIALS.url}sap/byd/odata/cust/v1/khopportunity/OpportunityCollection?$format=json&$expand=DocumentReference,EmployeeResponsible/EmployeeResponsibleName,ProspectParty/ProspectPartyName,SalesBusinessArea,SalesUnit/SalesUnitName,Text,Item`
    const res = await axios.get(url, {
      auth: CREDENTIALS.auth
    })

    try {
      const data = res.data.d.results
      console.log(JSON.stringify(data))
    } catch (error) {
      const errorJSon = { message: 'Error al traer los resultados', errorData: error, code: 400 }
      console.log(JSON.stringify(errorJSon))
    }
  } catch (error) {
    const errorJSon = { message: 'Error al traer los resultados', errorData: error, code: 400 }
    console.log(JSON.stringify(errorJSon))
  }
}

main()
