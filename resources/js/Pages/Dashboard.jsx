import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { useTrm } from '@/hooks/useTrm'
import { TrmGraph } from '@/Components/Trm'

export default function Dashboard ({ auth }) {
  const { valores, loading, trmInCop } = useTrm()
  // eslint-disable-next-line no-undef
  Echo.private('events')
    .listen('RealTimeMessage', (e) => console.log('RealTimeMessage: ' + e.message))
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

      {loading ? <p>Cargando...</p> : <TrmGraph valores={valores} trmInCop={trmInCop} />}

    </AuthenticatedLayout>
  )
}
