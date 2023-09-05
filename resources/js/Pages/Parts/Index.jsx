import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { FormCalculator } from './components/FormCalculator'
import { Accordion, AccordionItem, Button, Input } from '@nextui-org/react'
import { ClientForm } from './components/ClientForm'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { CLIENT_INITIAL_VALUES, SERVER_INITIAL_VALUES } from './constants/initialValues'

export default function Parts ({ auth, soParts, parts }) {
  const [client, setClient] = useLocalStorage('client', CLIENT_INITIAL_VALUES)
  const [calculator, setCalculator] = useLocalStorage('serverParts', SERVER_INITIAL_VALUES)

  const [total, setTotal] = useLocalStorage('total', 0)

  const handleCalculatorUpdate = (updateCalculator) => {
    setCalculator(updateCalculator)
  }

  const handleClientUpdate = (updateClient) => {
    setClient(updateClient)
  }

  const handleTotalUpdate = (updateTotal) => {
    setTotal(updateTotal)
  }

  const deleteLocalStorageItems = () => {
    window.localStorage.removeItem('client')
    window.localStorage.removeItem('serverParts')
    window.localStorage.removeItem('total')
    handleClientUpdate(CLIENT_INITIAL_VALUES)
    handleCalculatorUpdate(SERVER_INITIAL_VALUES)
    handleTotalUpdate(0)
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
              <div className='mr-auto place-self-center lg:col-span-6'>
                <h2 className='max-w-2xl mb-4 text-2xl text-center font-bold mt-3'>
                  Calculadora de Precios para nuevo Servidor
                </h2>
                <Accordion>
                  <AccordionItem key={1} aria-label='Datos del Cliente' subtitle='Ingreso del cliente' title='Datos del Cliente'>
                    <ClientForm onClientUpdate={handleClientUpdate} />
                  </AccordionItem>
                  <AccordionItem key={2} aria-label='Datos del nuevo Servidor' subtitle='Calculadora del servidor' title='Datos del Servidor'>
                    <FormCalculator soParts={soParts} parts={parts} onCalculateUpdate={handleCalculatorUpdate} onTotalUpdate={handleTotalUpdate} />
                  </AccordionItem>
                </Accordion>
              </div>
              <div className='lg:col-span-6'>
                <h2 className='text-center my-5 font-bold text-xl'>Cliente</h2>
                <div className='grid gap-2 grid-cols-2'>
                  <Input value={client?.nameClient} type='text' isDisabled label='Nombre del Cliente' labelPlacement='outside-left' />
                  <Input value={client?.email} type='email' isDisabled label='Correo electronico' labelPlacement='outside-left' />
                  <Input value={client?.phone} type='tel' isDisabled label='Numero de Contacto' labelPlacement='outside-left' />
                  <Input value={client?.identification} type='number' isDisabled label='Identificacion' labelPlacement='outside-left' />
                </div>
                <h2 className='text-center my-5 font-bold text-xl'>Caracteristicas del Servidor</h2>
                <div className='grid gap-2 grid-cols-2'>
                  <Input value={calculator?.cpuCores} type='text' isDisabled label='Nucleos de Procesador' labelPlacement='outside-left' />
                  <Input
                    value={calculator?.ram} type='email' isDisabled label='Memoria RAM' labelPlacement='outside-left' endContent={
                      <div className='pointer-events-none flex items-center'>
                        <span className='text-default-400 text-small'>GB</span>
                      </div>
                  }
                  />
                  <Input
                    value={calculator?.storage} type='tel' isDisabled label='Almacenamiento' labelPlacement='outside-left' endContent={
                      <div className='pointer-events-none flex items-center'>
                        <span className='text-default-400 text-small'>GB</span>
                      </div>
                  }
                  />
                  <Input
                    value={calculator?.bandwidth} type='number' isDisabled label='Ancho de Banda' labelPlacement='outside-left' endContent={
                      <div className='pointer-events-none flex items-center'>
                        <span className='text-default-400 text-small'>MB/S</span>
                      </div>
                  }
                  />
                  <Input
                    value={calculator?.so !== 0 ? 'Windows Server' : 'Linux'} type='text' isDisabled label='Sistema Operativo' labelPlacement='outside-left'
                  />
                  <Input
                    value={calculator?.sql2core !== 0 ? 'Si' : 'No'} type='text' isDisabled label='Licencia SQL 2 Core' labelPlacement='outside-left'
                  />
                  <Input
                    value={calculator?.rdp !== 0 ? 'Si' : 'No'} type='text' isDisabled label='Licencia RDP SPLA' labelPlacement='outside-left'
                  />
                  <Input
                    value={calculator?.ip !== 0 ? 'Si' : 'No'} type='text' isDisabled label='Ip Publica' labelPlacement='outside-left'
                  />
                  <Input
                    value={calculator?.sql2extra !== 0 ? calculator?.sql2extra : 'Ninguno'} type='text' isDisabled label='Usuarios SQL 2 CORE Adicionales' labelPlacement='outside-left'
                  />
                  <Input
                    value={calculator?.rdpExtra !== 0 ? calculator?.rdpExtra : 'Ninguno'} type='text' isDisabled label='Usuarios RDP SPLA Extra' labelPlacement='outside-left'
                  />
                </div>
                <div className='flex justify-end gap-2 my-6'>
                  <h3 className='font-semibold self-center'> Total Servidor: ${total !== '' ? parseFloat(total).toFixed(2) : 0} USD </h3>
                </div>
                <div className='flex justify-end gap-2 my-6'>
                  {total > 0 && (
                    <Button onClick={deleteLocalStorageItems}>Cancelar</Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AuthenticatedLayout>
  )
}
