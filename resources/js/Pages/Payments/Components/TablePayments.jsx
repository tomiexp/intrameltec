/* eslint-disable no-undef */
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react'
import { currencyFormatter } from '@/helpers/currencyFormatter'
import { THEADS_PAYMENTS } from '@/constants/initialValues'
import { dateFormatter } from '@/helpers/dateHelper'
import axios from 'axios'
import { useState } from 'react'
import SapLoader from '@/Components/SapLoader'

export default function TablePayments ({ transactions, token }) {
  const [details, setDetails] = useState(null)
  const [loading, setLoading] = useState(false)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const getDetailsTransaction = async (transaction) => {
    try {
      setLoading(true)
      setDetails(null)
      const request = await axios(route('payment.details', transaction), {
        headers: {
          Authorization: token
        }
      })

      if (request.status !== 200) {
        throw new Error('Error al obtener los datos de las transacciones: ')
      }

      setLoading(false)
      setDetails(request.data.transaction)
    } catch (error) {
      console.error(error)
      setDetails(null)
      setLoading(false)
    }
  }

  return (
    <>
      <Table aria-label='Tabla de transacciones Epayco Meltec'>
        <TableHeader>
          {THEADS_PAYMENTS.map((head, key) => (
            <TableColumn key={key} className='text-center'>{head}</TableColumn>
          ))}

        </TableHeader>
        <TableBody>
          {transactions.map(({ referencePayco, names, lastnames, paymentMethod, bank, amount, currency, status, response, transactionDate }) => (
            <TableRow key={referencePayco} className={`text-center ${status === 'Rechazada' ? 'bg-red-500/25' : 'bg-green-500/25'}`}>
              <TableCell> <Button color={status === 'Rechazada' ? 'danger' : 'success'} className='text-white' onClick={() => getDetailsTransaction(referencePayco)} onPress={onOpen}>{referencePayco}</Button></TableCell>
              <TableCell>{dateFormatter(transactionDate)}</TableCell>
              <TableCell>{names} {lastnames}</TableCell>
              <TableCell>{paymentMethod} - {bank}</TableCell>
              <TableCell>{currencyFormatter({ value: amount, money: currency })}</TableCell>
              <TableCell>{status} - {response}</TableCell>
              <TableCell>{status} - {response}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {loading && <SapLoader message='Obteniendo datos de la Referencia, espera un momento' />}
          {
            details && (
              <>
                <ModalHeader className='flex flex-col gap-1'>{details.referencePayco}</ModalHeader>
                <ModalBody>
                  <div className='flex flex-row justify-between gap-2'>
                    <div className='p-2'>
                      <p>{details.referencePayco}</p>
                    </div>

                    <picture>
                      <img src='' alt='Factura de referencia' />
                    </picture>

                  </div>
                </ModalBody>
                <ModalFooter />
              </>
            )
          }
        </ModalContent>

      </Modal>

    </>
  )
}
