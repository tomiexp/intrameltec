import axios from 'axios'
import 'dotenv/config'

async function main () {
  try {
    const url = 'https://my345513.sapbydesign.com/sap/byd/odata/cust/v1/khopportunity/OpportunityCollection?$format=json&$expand=DocumentReference,EmployeeResponsible/EmployeeResponsibleName,ProspectParty/ProspectPartyName,SalesBusinessArea,SalesUnit/SalesUnitName,Text,Item'
    const res = await axios.get(url, {
      auth: {
        username: 'CFRANCO',
        password: 'C0l0mb1@2025*'
      }
    })

    try {
      const data = res.data.d.results
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  } catch (error) {
    console.error('Error al traer el resultado', error)
  }
}

main()
