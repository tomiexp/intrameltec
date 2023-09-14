/* eslint-disable no-undef */
import Routes from '@/routes/Routes'
import DropdownProfile from '@/routes/DropdownProfile'
import ResposiveRoutes from '@/routes/ResponsiveRoutes'
import { Badge, Link } from '@nextui-org/react'
import { NotificationIcon } from '@/Components/icons/Icons'

export default function Authenticated ({ user, header, children, unreadNotifications }) {
  return (
    <div className='min-h-screen bg-gray-100'>

      {/* TopBar */}
      <nav className='bg-white border-b border-gray-100'>
        <div className='max-w mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex'>
              <Routes user={user} />
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

      {header && (
        <header className='bg-white shadow'>
          <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>{header}</div>
        </header>
      )}

      <main>
        {children}
      </main>
    </div>
  )
}

/**
 *  <!-- Barra lateral -->
    <div id="sidebar" class="lg:block hidden bg-white w-64 h-screen fixed rounded-none border-none">
        <!-- Items -->
        <div class="p-4 space-y-4">
            <!-- Inicio -->
            <a href="#" aria-label="dashboard" class="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                <i class="fas fa-home text-white"></i>
                <span class="-mr-1 font-medium">Inicio</span>
            </a>
            <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                <i class="fas fa-gift"></i>
                <span>Recompensas</span>
            </a>
            </a>
            <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                <i class="fas fa-store"></i>
                <span>Sucursalses</span>
            </a>

            <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                <i class="fas fa-wallet"></i>
                <span>Billetera</span>
            </a>
            <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                <i class="fas fa-exchange-alt"></i>
                <span>Transacciones</span>
            </a>
            <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                <i class="fas fa-user"></i>
                <span>Mi cuenta</span>
            </a>
            <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
            <i class="fas fa-sign-out-alt"></i>
            <span>Cerrar sesión</span>
        </a>
        </div>
    </div>
 */
