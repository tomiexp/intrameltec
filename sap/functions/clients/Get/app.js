import axios from 'axios'
import { CREDENTIALS } from '../../../constants/constants.js'

async function main () {
  try {
    const url = `${CREDENTIALS.urlTest}sap/byd/odata/cust/v1/clientesv3/CustomerCollection?$format=json&$select=ObjectID,NombreCliente,CorreoCliente,FirstLineName,Direccion,TelefonoContacto,InternalID`

    const res = await axios(url, {
      auth: CREDENTIALS.authTest
    })

    try {
      const data = res.data.d.results
      const jsonData = { code: 200, data }
      console.log(JSON.stringify(jsonData))
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
