import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'

export default function Users ({ auth, users }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className='font-semibold text-xl text-gray-800 leading-tight'>Usuarios</h2>}
    >
      <Head title='Usuarios' />

      <div className='bg-white grid v-screen '>
        <div className='p-4 sm:p-8 bg-white shadow sm:rounded-lg'>
          <div className='relative overflow-x-auto'>
            <table className='table-auto borde border-gray-400 w-full text-sm text-center'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr className='bg-gray-50'>
                  <th className='px-2 py-2'>Id</th>
                  <th className='px-2 py-2'>Nombre de Usuario</th>
                  <th className='px-2 py-2'>Correo Electronico</th>
                  <th className='px-2 py-2'>Metodo de inicio de Sesion</th>
                  <th className='px-2 py-2'>Id Avatar</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td className='px-2 py-2'>{user.id}</td>
                    <td className='px-2 py-2'>{user.name}</td>
                    <td className='px-2 py-2'>{user.email}</td>
                    <td className='px-2 py-2'>{user.external_auth}</td>
                    <td className='px-2 py-2'>
                      <img src={user.avatar} alt={'Avatar Usuario ' + user.name} />
                    </td>
                    <td>
                      <a href='#'>Editar</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
