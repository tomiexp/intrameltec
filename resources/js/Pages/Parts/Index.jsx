import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { FormCalculator } from './components/FormCalculator'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { ClientForm } from './components/ClientForm'
import { useState } from 'react'

export default function Parts ({ auth, soParts, parts }) {
  const [client, setClient] = useState({
    nameClient: '',
    email: '',
    phone: '',
    identification: ''
  })

  const handleClientUpdate = (updateClient) => {
    setClient(updateClient)
  }

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className='font-semibold text-xl text-gray-800 leading-tight'>Partes del servidor</h2>}
    >
      <Head title='Partes del servidor' />

      <section className='py-12'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
            <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-0 lg:py-16 lg:grid-cols-12'>
              <div className='mr-auto place-self-center lg:col-span-7'>
                <h2 className='max-w-2xl mb-4 text-2xl text-center font-bold mt-3'>
                  Calculadora de Precios para nuevo Servidor
                </h2>
                <Accordion>
                  <AccordionItem key={1} aria-label='Datos del Cliente' subtitle='Ingreso del cliente' title='Datos del Cliente'>
                    <ClientForm onClientUpdate={handleClientUpdate} />
                  </AccordionItem>
                  <AccordionItem key={2} aria-label='Datos del nuevo Servidor' subtitle='Calculadora del servidor' title='Datos del Servidor'>
                    <FormCalculator soParts={soParts} parts={parts} />
                  </AccordionItem>
                </Accordion>
              </div>
              <p>{client.nameClient}</p>
            </div>
          </div>
        </div>
      </section>
    </AuthenticatedLayout>
  )
}
