/* eslint-disable no-undef */
import NavLink from '@/Components/NavLink'
import { Link } from '@inertiajs/react'
import ApplicationLogo from '@/Components/ApplicationLogo'
import Dropdown from '@/Components/Dropdown'
import NavDropdown from '@/Components/NavDropdown'

export default function Routes () {
  return (
    <>

      <div className='shrink-0 flex items-center'>
        <Link href='/'>
          <ApplicationLogo className='block h-9 w-auto fill-current text-gray-800' />
        </Link>
      </div>

      <div className='hidden space-x-8 sm:-my-px sm:ml-10 sm:flex'>
        <NavLink href={route('dashboard')} active={route().current('dashboard')}>
          Dashboard
        </NavLink>
      </div>

      <div className='hidden space-x-8 sm:-my-px sm:ml-10 sm:flex'>
        <NavLink href={route('admin.parts.index')} active={route().current('admin.parts.index')}>
          Partes de Servidor
        </NavLink>
      </div>
      <div className='hidden sm:flex sm:items-center sm:ml-6'>
        <div className='ml-3 relative'>
          <NavDropdown menu='Informe de Kpi'>
            <Dropdown.Link href={route('directors.index')}>Kpi´s Generales</Dropdown.Link>
          </NavDropdown>
        </div>
      </div>
      <div className='hidden sm:flex sm:items-center sm:ml-6'>
        <div className='ml-3 relative'>
          <NavDropdown menu='Gestion del Sistema'>
            <Dropdown.Link href={route('admin.users.index')}>Usuarios del Sistema</Dropdown.Link>
            <Dropdown.Link href={route('admin.rols.index')}>Roles y Permisos</Dropdown.Link>
          </NavDropdown>
        </div>
      </div>
    </>
  )
}
