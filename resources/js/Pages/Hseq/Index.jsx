import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Link } from '@inertiajs/react'
import CardComponent from './Components/CardComponent'

export default function Index ({ auth, unreadNotifications }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      unreadNotifications={unreadNotifications}
      header={<h2 className='font-semibold text-xl text-gray-800 leading-tight'>Partes del servidor</h2>}
    >

      <section className='py-12'>
        <div className='max-w-8xl mx-auto sm:px-6 lg:px-8'>
          <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
            <div className='flex justify-between m-5'>
              <h2 className='text-center font-bold text-2xl'>Documentos HSEQ</h2>
              <Link href='#' className='text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 rounded text-sm px-5 py-2.5 transition ease-in-out'>Agregar Documento</Link>

            </div>
            <div className='grid grid-cols-4 m-5 gap-5'>
              <CardComponent name='Test 123456789adasdadwad' size={800} />
            </div>
          </div>
        </div>
      </section>
    </AuthenticatedLayout>
  )
}
