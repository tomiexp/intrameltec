import axios from 'axios'
import { useEffect, useState } from 'react'

export function useEpayco ({ token, message }) {
  const [transactions, setTransactions] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

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
        setError(message)
      }
    }

    getTransactions()
  }, [])

  return { transactions, loading, error }
}
