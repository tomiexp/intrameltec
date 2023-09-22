import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { Button, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/react'

export default function Edit ({ auth, tokens }) {
  console.log(tokens)
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className='font-semibold text-xl text-gray-800 leading-tight'>Tokens de {auth.user.name}</h2>}
    >
      <Head title='Tokens de usuario' />

      <div className='py-12'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6'>
          <div className='p-4 sm:p-8 bg-white shadow sm:rounded-lg'>
            <div className='flex justify-end'>
              <Button color='primary'> Crear Nuevo token </Button>
            </div>
            <Table aria-label='Tokens de Acceso de usuario' className='mt-6'>
              <TableHeader>
                <TableColumn>Id</TableColumn>
                <TableColumn>Nombre del Token</TableColumn>
                <TableColumn>Token</TableColumn>
              </TableHeader>
              {tokens.length === 0 && (
                <TableBody emptyContent='No  tienes Tokens de Acceso creados' />
              )}
            </Table>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
