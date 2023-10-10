import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { useTrm } from '@/hooks/useTrm'
import { TrmGraph } from '@/Components/Trm'

// import { RealTimeNotification } from '@/Components/RealTimeNotification'

export default function Dashboard ({ auth, unreadNotifications }) {
  const { valores, loading, trmInCop } = useTrm()

  return (
    <AuthenticatedLayout
      auth={auth}
      unreadNotifications={unreadNotifications}
      header={
        <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
          Inicio Meltec Comunicaciones S.A
        </h2>
            }
    >
      <Head title='Dashboard' />
      {/* <RealTimeNotification event={`App.Models.User.${auth.user.id}`} /> */}
      <section className='py-12'>
        <div className='max-w-8xl mx-auto sm:px-6 lg:px-8 flex gap-1'>
          {/* {loading ? <p>Cargando...</p> : <TrmGraph valores={valores} trmInCop={trmInCop} />} */}
          {loading ? <p>Cargando...</p> : <TrmGraph valores={valores} trmInCop={trmInCop} />}
        </div>
      </section>

    </AuthenticatedLayout>
  )
}
