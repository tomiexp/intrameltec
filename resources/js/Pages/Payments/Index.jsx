import Header from '@/Components/Header'
import SapLoader from '@/Components/SapLoader'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { currencyFormatter } from '@/helpers/currencyFormatter'

export default function Payment ({ auth, unreadNotifications, token, message = '' }) {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const getTransactions = async () => {
      try {
        const requestTransactions = await axios.post('/transactions-epayco', {
          token
        })
        setLoading(false)

        if (requestTransactions.status !== 200) {
          setLoading(false)
          throw new Error('Error al obtener los datos de las transacciones: ')
        }

        setTransactions(requestTransactions.data.transactions)
      } catch (error) {
        setLoading(false)
        setTransactions([])
        console.error(error)
      }
    }

    getTransactions()
  }, [])
  console.log(transactions)

  return (
    <AuthenticatedLayout
      auth={auth}
      unreadNotifications={unreadNotifications}
      header={<Header title='Historial de Transacciones Epayco Meltec' />}
    >
      <Head title='Historial de Transacciones Epayco Meltec' />

      <section className='py-12'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
            <div className='p-6'>

              {loading && <SapLoader />}

              {
              transactions &&
                <Table aria-label='Tabla de transacciones Epayco Meltec'>
                  <TableHeader>
                    <TableColumn>Id de la transaccion</TableColumn>
                    <TableColumn>Usuario</TableColumn>
                    <TableColumn>Medio de Pago - Banco</TableColumn>
                    <TableColumn>Monto</TableColumn>
                    <TableColumn>Estado de la transaccion - Motivo</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {transactions.map(({ referencePayco, names, lastnames, paymentMethod, bank, amount, currency, status, response }) => (
                      <TableRow key={referencePayco}>
                        <TableCell>{referencePayco}</TableCell>
                        <TableCell>{names} {lastnames}</TableCell>
                        <TableCell>{paymentMethod} - {bank}</TableCell>
                        <TableCell>{currencyFormatter({ value: amount, money: currency })}</TableCell>
                        <TableCell>{status} - {response}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              }
            </div>
          </div>
        </div>
      </section>

    </AuthenticatedLayout>
  )
}
