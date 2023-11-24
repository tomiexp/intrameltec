import Authenticated from '@/Layouts/AuthenticatedLayout'
import Header from '@/Components/Header'
import { Head } from '@inertiajs/react'
import { TableParts } from './components/Table'

export default function Index ({ auth, title }) {
  return (
    <Authenticated auth={auth} header={<Header title={title} />}>

      <Head title={title} />

      <section className='py-12'>
        <div className='max-w-full mx-auto sm:px-6 lg:px-8'>
          <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
            <div className='p-6'>
              <h2 className='font-bold text-2xl m-5'>Listado de partes de Servidor</h2>
              <TableParts />
            </div>
          </div>
        </div>
      </section>
    </Authenticated>
  )
}
