import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'

export default function Parts ({ auth }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className='font-semibold text-xl text-gray-800 leading-tight'>Partes del servidor</h2>}
    >
      <Head title='Partes del servidor' />

      <div className='bg-white grid v-screen '>
        <div className='p-4 sm:p-8 bg-white shadow sm:rounded-lg'>
          <img src='/img/19199262.jpg' alt='Imagen de Parte de Desarrollo en construccion' />
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
