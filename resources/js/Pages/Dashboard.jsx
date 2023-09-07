import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { useTrm } from '@/hooks/useTrm'
import { TrmGraph } from '@/Components/Trm'
import { RealTimeNotification } from '@/Components/RealTimeNotification'

export default function Dashboard ({ auth }) {
  const { valores, loading, trmInCop } = useTrm()
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
          Inicio Meltec Comunicaciones S.A
        </h2>
            }
    >
      <Head title='Dashboard' />
      <RealTimeNotification event='App.Models.User.1' />

      {loading ? <p>Cargando...</p> : <TrmGraph valores={valores} trmInCop={trmInCop} />}

    </AuthenticatedLayout>
  )
}
