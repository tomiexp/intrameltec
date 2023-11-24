/* eslint-disable no-undef */
import DropdownProfile from '@/routes/DropdownProfile'
import ResposiveRoutes from '@/routes/ResponsiveRoutes'
import { Badge, Link } from '@nextui-org/react'
import { HomeIcon, NotificationIcon, DatacenterIcon, ToolIcon, SellerIcon, HumanIcon, AccountingIcon } from '@/Components/icons/Icons'
import Sidebar, { SidebarItem } from './partials/Sidebar'
import DevMessage from './partials/DevMessage'

export default function Authenticated ({ auth, header, children, unreadNotifications, ...props }) {
  const user = auth.user
  return (
    <div className='min-h-screen bg-gray-100'>

      {/* TopBar */}
      <nav className='bg-white border-b border-gray-100'>
        <div className='max-w mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16 items-stretch'>
            <div className='self-center'>
              {header && (
                <header className='bg-white'>
                  <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>{header}</div>
                </header>
              )}
            </div>
            <div className='flex'>
              <Link href={route('notifications')}>
                <Badge color='danger' content={unreadNotifications} shape='circle'>
                  <NotificationIcon className='flex align-middle' size={40} />
                </Badge>
              </Link>
              <DropdownProfile user={user} />
            </div>
          </div>
        </div>
        <ResposiveRoutes user={user} />

      </nav>

      <div className='flex'>

        <Sidebar>
          <SidebarItem icon={<HomeIcon size='32px' color='#395181' />} href={route('dashboard')} active text='Inicio' />
          <SidebarItem icon={<DatacenterIcon size='32px' color='#395181' />} href={route('admin.parts.index')} text='Datacenter Meltec IT' />
          <SidebarItem icon={<SellerIcon size='32px' color='#395181' />} href={route('commercial.quoter')} text='Area Comercial' />
          <SidebarItem icon={<HumanIcon size='32px' color='#395181' />} href={route('resources.hseq.index')} text='Area HSEQ' />
          <SidebarItem icon={<AccountingIcon size='32px' color='#395181' />} href={route('payments.index')} text='Area Contable' />
          <SidebarItem icon={<ToolIcon size='32px' color='#395181' />} href={route('kpi.reports.index')} text={'Kpi\'s'} />
        </Sidebar>

        <main className='w-screen p-6'>
          {children}
        </main>

      </div>
      <footer>
        <DevMessage />
      </footer>
    </div>
  )
}
