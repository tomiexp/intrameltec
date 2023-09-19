// Layout
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

// Component
import { Head } from '@inertiajs/react'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Button, Spacer, Link } from '@nextui-org/react'
import { DownloadIcon } from '@/Components/icons/Icons'

export default function Parts ({ auth, unreadNotifications, servers }) {
  console.log(servers)
  const dataServers = servers.data
  const paginate = servers.links

  const getClassName = (active) => {
    if (active) {
      return 'mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary bg-blue-700 text-white'
    } else {
      return 'mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary'
    }
  }
  return (
    <AuthenticatedLayout
      user={auth.user}
      unreadNotifications={unreadNotifications}
      header={<h2 className='font-semibold text-xl text-gray-800 leading-tight'>Partes del servidor</h2>}
    >
      <Head title='Partes del servidor' />

      <section className='py-12'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
            <Table
              aria-label='Tabla de cotizaciones de servidores' bottomContent={
                <div className='flex w-full justify-center'>
                  {
                    paginate.map((page, index) => (
                      page.url === null
                        ? (
                          <div
                            key={index}
                            className='mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded'
                          >{page.label}
                          </div>
                          )
                        : (
                          <Link
                            key={index}
                            className={getClassName(page.active)}
                            href={page.url}
                          >{page.label}
                          </Link>
                          )
                    ))
                  }
                </div>
            }
            >

              <TableHeader>
                <TableColumn>Fecha de cotizacion</TableColumn>
                <TableColumn>Nombre de Cliente</TableColumn>
                <TableColumn>Duración del Contrato</TableColumn>
                <TableColumn>Total USD/Año</TableColumn>
                <TableColumn>Total USD/Año</TableColumn>
                <TableColumn>Archivo</TableColumn>
              </TableHeader>
              <TableBody>
                {dataServers.map((server) => (
                  <TableRow key={server.id}>
                    <TableCell>{server.created_at}</TableCell>
                    <TableCell>{server.client_server.client}</TableCell>
                    <TableCell>{server.total_mounth}</TableCell>
                    <TableCell>{server.total_amount}</TableCell>
                    <TableCell>{server.total_year}</TableCell>
                    <TableCell><Button><DownloadIcon size={24} /></Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </AuthenticatedLayout>
  )
}

/**
 * (
                      <Button
                        key={index}
                        type='button'
                        size='large'
                        color='primary'
                        onClick={() => { window.location.href = page.url }}
                      >
                        {page.label}
                      </Button>
                    )
 */
