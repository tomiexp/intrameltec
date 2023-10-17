/* eslint-disable no-undef */
import NavLink from '@/Components/NavLink'
import Dropdown from '@/Components/Dropdown'
import NavDropdown from '@/Components/NavDropdown'
import { HomeIcon, DatacenterIcon, ToolIcon, SellerIcon, HumanIcon } from '@/Components/icons/Icons'
import { ROLES_CONSTANTS } from '@/constants/initialValues'
import NavKpis from './Kpis/NavKpis'

export default function Routes ({ user }) {
  const roleName = user.roles[0].name // directors.index
  return (
    <nav className='space-y-2'>
      <NavLink href={route('dashboard')} active={route().current('dashboard')} className='w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500'>
        <HomeIcon size={24} color='#000000' />
        <span className='text-sm font-medium px-5 self-center'>
          Home
        </span>
      </NavLink>
      {roleName.includes(ROLES_CONSTANTS.Admin)
        ? (
          <div className='w-full flex items-center justify-around space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500'>
            <DatacenterIcon size={24} color='#000000' />
            <NavDropdown menu='Datacenter Meltec IT'>
              <Dropdown.Link href={route('admin.parts.index')}>Todos los Servidores</Dropdown.Link>
              <Dropdown.Link href={route('admin.parts.create')}>Generar Cotización de Servidor</Dropdown.Link>
            </NavDropdown>
          </div>
          )
        : ''}

      <div className='w-full flex items-center justify-around space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500'>
        <SellerIcon size={24} color='#000000' />
        <NavDropdown menu='Area Comercial'>
          <Dropdown.Link href={route('commercial.quoter')}>Cotizador en Linea</Dropdown.Link>
        </NavDropdown>
      </div>

      <div className='w-full flex items-center justify-around space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500'>
        <HumanIcon size={24} color='#000000' />
        <NavDropdown menu='Area HSEQ'>
          <Dropdown.Link href={route('resources.hseq.index')}>Documentos Hseq</Dropdown.Link>
        </NavDropdown>
      </div>

      <NavKpis />

      {roleName.includes(ROLES_CONSTANTS.Admin)
        ? (
          <div className='w-full flex items-center justify-around space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500'>
            <ToolIcon size={24} color='#000000' />
            <NavDropdown menu='Gestion del Sistema' className='w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500'>
              <Dropdown.Link href={route('admin.partsedit.index')}>Partes de Servidor Datacenter</Dropdown.Link>
              <Dropdown.Link href={route('kpi.reports.index')}>Kpi's</Dropdown.Link>
              <Dropdown.Link href={route('admin.users.index')}>Usuarios del Sistema</Dropdown.Link>
              <Dropdown.Link href={route('admin.rols.index')}>Roles y Permisos</Dropdown.Link>
            </NavDropdown>
          </div>
          )
        : ''}

    </nav>
  )
}
