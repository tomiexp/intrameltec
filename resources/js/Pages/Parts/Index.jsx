// Layout
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

// Component
import { Head } from '@inertiajs/react'

export default function Parts ({ auth, unreadNotifications }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      unreadNotifications={unreadNotifications}
      header={<h2 className='font-semibold text-xl text-gray-800 leading-tight'>Partes del servidor</h2>}
    >
      <Head title='Partes del servidor' />

      <section className='py-12'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
            <h2>Hola desde index</h2>
          </div>
        </div>
      </section>
    </AuthenticatedLayout>
  )
}
