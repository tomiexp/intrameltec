import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { useTrm } from '@/hooks/useTrm'
import { TrmGraph } from '@/Components/Trm'
import axios from 'axios'

// import { RealTimeNotification } from '@/Components/RealTimeNotification'

export default function Dashboard ({ auth, unreadNotifications }) {
  const { valores, loading, trmInCop } = useTrm()

  const todaySales = async () => {
    try {
      const url = 'https://my345513.sapbydesign.com/sap/byd/odata/analytics/kpi/Kpi.svc/Kpi(\'Z06B490E4B983CB96DD195ADF\')/Value?$format=json'
      const request = await axios(url, {
        auth: {
          username: 'CFRANCO',
          password: 'C0l0mb1@2025*'
        }
      })
      console.log(request)
    } catch (error) {
      console.error(error)
    }
  }

  todaySales()

  return (
    <AuthenticatedLayout
      user={auth.user}
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
          {loading ? <p>Cargando...</p> : <TrmGraph valores={valores} trmInCop={trmInCop} />}
          {loading ? <p>Cargando...</p> : <TrmGraph valores={valores} trmInCop={trmInCop} />}
        </div>
      </section>

    </AuthenticatedLayout>
  )
}

/**
 *
import { CREDENTIALS } from '../../../../sap/constants/constants.js'
export

 */
