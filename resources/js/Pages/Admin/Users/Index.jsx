import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { UsersTable } from './components/UsersTable'

export default function Users ({ auth, users, roles }) {
  return (
    <AuthenticatedLayout
      auth={auth}
      header={<h2 className='font-semibold text-xl text-gray-800 leading-tight'>Usuarios</h2>}
    >
      <Head title='Usuarios' />

      <section className='py-12'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
            <div className='p-6'>
              <UsersTable users={users} roles={roles} />
            </div>
          </div>
        </div>
      </section>
    </AuthenticatedLayout>
  )
}
