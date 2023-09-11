/* eslint-disable no-undef */
import NavLink from '@/Components/NavLink'
import { Link } from '@inertiajs/react'
import ApplicationLogo from '@/Components/ApplicationLogo'
import Dropdown from '@/Components/Dropdown'
import NavDropdown from '@/Components/NavDropdown'

export default function Routes ({ user }) {
  const roleName = user.roles[0].name
  const ROLES_CONSTANTS = {
    Admin: 'Administrador',
    Director: 'Director',
    'Usuario corriente': 'Usuario corriente'
  }
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
      {roleName.includes(ROLES_CONSTANTS.Admin)
        ? (
          <div className='hidden space-x-8 sm:-my-px sm:ml-10 sm:flex'>
            <NavLink href={route('admin.parts.index')} active={route().current('admin.parts.index')}>
              Datacenter
            </NavLink>
          </div>
          )
        : ''}

      {roleName.includes(ROLES_CONSTANTS.Admin) || roleName.includes(ROLES_CONSTANTS.Director)
        ? (
          <div className='hidden sm:flex sm:items-center sm:ml-6'>
            <div className='ml-3 relative'>
              <NavDropdown menu='Informe de Kpi'>
                <Dropdown.Link href={route('directors.index')}>Kpi´s Generales</Dropdown.Link>
              </NavDropdown>
            </div>
          </div>
          )
        : ''}

      {roleName.includes(ROLES_CONSTANTS.Admin)
        ? (
          <div className='hidden sm:flex sm:items-center sm:ml-6'>
            <div className='ml-3 relative'>
              <NavDropdown menu='Gestion del Sistema'>
                <Dropdown.Link href={route('admin.users.index')}>Usuarios del Sistema</Dropdown.Link>
                <Dropdown.Link href={route('admin.rols.index')}>Roles y Permisos</Dropdown.Link>
              </NavDropdown>
            </div>
          </div>
          )
        : ''}

    </>
  )
}
