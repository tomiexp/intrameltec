import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { UsersTable } from './components/UsersTable'
import Header from '@/Components/Header'

export default function Users ({ auth }) {
  return (
    <AuthenticatedLayout
      auth={auth}
      header={<Header title='Usuarios' />}
    >
      <Head title='Usuarios' />

      <section className='py-12'>
        <div className='max-w-full mx-auto sm:px-6 lg:px-8'>
          <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
            <div className='p-6'>
              <UsersTable />
            </div>
          </div>
        </div>
      </section>
    </AuthenticatedLayout>
  )
}
