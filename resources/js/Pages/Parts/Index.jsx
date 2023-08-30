import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
// import { Input } from '@nextui-org/react'

export default function Parts ({ auth }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className='font-semibold text-xl text-gray-800 leading-tight'>Partes del servidor</h2>}
    >
      <Head title='Partes del servidor' />

      <section className='py-12'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
            <img src='/img/19199262.jpg' alt='Servicio en desarrollo' />
          </div>
        </div>
      </section>
    </AuthenticatedLayout>
  )
}
