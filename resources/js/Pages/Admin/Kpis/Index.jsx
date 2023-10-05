import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import KpisTable from './Components/KpisTable'
import KpiModalFragment from './Fragments/KpiModalFragment'

export default function Index ({ auth, reports, roles, reportsData2 }) {
  const paginate = reports.links
  return (
    <AuthenticatedLayout
      auth={auth}
      header={<h2 className='font-semibold text-xl text-gray-800 leading-tight'>Administración de Kpis</h2>}
    >
      <Head title='Administración de Kpis' />

      <section className='py-12'>
        <div className='max-w-8xl mx-auto sm:px-6 lg:px-8'>
          <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
            <div className='p-6'>
              <div className='flex justify-between m-5'>
                <h2 className='font-bold text-2xl'>Kpis en Vivo</h2>
                {auth?.permissions?.includes('admin.kpis.create') ? (<KpiModalFragment roles={roles} />) : ''}
              </div>
              <KpisTable data={reportsData2} paginate={paginate} />
            </div>
          </div>
        </div>
      </section>
    </AuthenticatedLayout>
  )
}
