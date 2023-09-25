/* eslint-disable no-undef */
// Layout
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

// Helpers
import { TABLE_HEADER } from '../../constants/initialValues'
import { dateFormatter } from '@/helpers/dateHelper'
import { priceFormatted } from '@/helpers/priceHelper'

// Component
import { Head, Link } from '@inertiajs/react'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/react'
import { DownloadIcon } from '@/Components/icons/Icons'

export default function Parts ({ auth, unreadNotifications, servers }) {
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
                {TABLE_HEADER.map((header, i) => (
                  <TableColumn key={i} className='text-center'>{header}</TableColumn>
                ))}
              </TableHeader>
              <TableBody>
                {dataServers.map((server) => (
                  <TableRow key={server.id} className='text-center'>
                    <TableCell>{dateFormatter(server.created_at)}</TableCell>
                    <TableCell>{server.client_server.client}</TableCell>
                    <TableCell>{server.total_mounth} Meses</TableCell>
                    <TableCell>${priceFormatted(server.total_amount)}</TableCell>
                    <TableCell>${priceFormatted(server.total_year)}</TableCell>
                    <TableCell><a href={route('quoteserver.report', server.id)} className='text-center'><DownloadIcon size={24} /></a></TableCell>
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
