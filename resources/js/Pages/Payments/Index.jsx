import Header from '@/Components/Header'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Payment ({ auth, unreadNotifications, token, message = '' }) {
  // const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const getTransactions = async () => {
      const requestTransactions = await axios.post('/api/transactions-epayco', {
        token
      })

      console.log(requestTransactions)
    }

    getTransactions()
  }, [])

  return (
    <AuthenticatedLayout
      auth={auth}
      unreadNotifications={unreadNotifications}
      header={<Header title='Historial de Transacciones Epayco Meltec' />}
    >
      <Head title='Historial de Transacciones Epayco Meltec' />
    </AuthenticatedLayout>
  )
}
