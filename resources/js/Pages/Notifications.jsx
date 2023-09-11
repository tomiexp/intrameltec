import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { Card, CardBody } from '@nextui-org/react'

export default function Notifications ({ auth, unreadNotifications, notification }) {
  console.log(notification.data)
  return (
    <AuthenticatedLayout
      user={auth.user} unreadNotifications={unreadNotifications} header={
        <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
          Notificaciones
        </h2>
    }
    >
      <Head title='Notifications' />
      <div className='py-12'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='p-6'>
            {notification.data.map((notification) => (
              <Card key={notification.id}>
                <CardBody>
                  <p> Hola Soy una notificacion</p>
                </CardBody>
              </Card>

            ))}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
