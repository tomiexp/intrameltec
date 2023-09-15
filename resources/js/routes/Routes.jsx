/* eslint-disable no-undef */
import NavLink from '@/Components/NavLink'
import Dropdown from '@/Components/Dropdown'
import NavDropdown from '@/Components/NavDropdown'
import { HomeIcon, DatacenterIcon, ReportIcon, ToolIcon } from '@/Components/icons/Icons'

export default function Routes ({ user }) {
  const roleName = user.roles[0].name
  const ROLES_CONSTANTS = {
    Admin: 'Administrador',
    Director: 'Director',
    'Usuario corriente': 'Usuario corriente'
  }
  return (
    <nav className='space-y-2'>
      <NavLink href={route('dashboard')} active={route().current('dashboard')} className='w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500'>
        <HomeIcon size={24} color='#000000' />
        <span className='text-sm font-medium px-5 self-center'>
          Inicio Dashboard
        </span>
      </NavLink>
      {roleName.includes(ROLES_CONSTANTS.Admin)
        ? (
          <div className='w-full flex items-center justify-between space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500'>
            <DatacenterIcon size={24} color='#000000' />
            <NavDropdown menu='Datacenter Meltec IT'>
              <Dropdown.Link href={route('admin.parts.index')}>Todos los Servidores</Dropdown.Link>
              <Dropdown.Link href={route('admin.parts.create')}>Generar Cotización de Servidor</Dropdown.Link>
            </NavDropdown>
          </div>
          )
        : ''}

      {roleName.includes(ROLES_CONSTANTS.Admin) || roleName.includes(ROLES_CONSTANTS.Director)
        ? (
          <div className='w-full flex items-center justify-between space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500'>
            <ReportIcon size={24} color='#000000' />
            <NavDropdown menu='Informes de Kpi´s Meltec' className='w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500'>
              <Dropdown.Link href={route('directors.index')}>Kpi´s Generales</Dropdown.Link>
            </NavDropdown>
          </div>
          )
        : ''}

      {roleName.includes(ROLES_CONSTANTS.Admin)
        ? (
          <div className='w-full flex items-center justify-between space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500'>
            <ToolIcon size={24} color='#000000' />
            <NavDropdown menu='Gestion del Sistema' className='w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500'>
              <Dropdown.Link href={route('admin.users.index')}>Usuarios del Sistema</Dropdown.Link>
              <Dropdown.Link href={route('admin.rols.index')}>Roles y Permisos</Dropdown.Link>
            </NavDropdown>
          </div>
          )
        : ''}

    </nav>
  )
}

/**
 * <div className=''>
            <NavDropdown menu='Datacenter' className='w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500'>
              <Dropdown.Link href={route('admin.parts.index')}>Todos los Servidores</Dropdown.Link>
              <Dropdown.Link href={route('admin.parts.create')}>Generar Cotización de Servidor</Dropdown.Link>
            </NavDropdown>
          </div>
 */
