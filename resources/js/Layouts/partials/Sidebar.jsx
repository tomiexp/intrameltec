import NavLink from '@/Components/NavLink'
import { LeftMenu, RigthMenu, VerticalMenu } from '@/Components/icons/Icons'
import { createContext, useContext, useState } from 'react'

const SidebarContext = createContext()
export default function Sidebar ({ children }) {
  const [expanded, setExpanded] = useState(true)
  return (
    <aside className='h-screen'>
      <nav className='flex flex-col bg-white h-full shadow-sm'>
        <div className='p-4 pb-2 flex justify-between items-center'>
          <img src='https://img.logoipsum.com/243.svg' alt='logoipsum' className={` overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'} `} />
          <button onClick={() => setExpanded(curr => !curr)} className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
            {expanded ? <LeftMenu size={32} color='#395181' /> : <RigthMenu size={32} color='#395181' />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className='flex-1 px-3'> {children} </ul>
        </SidebarContext.Provider>

        <div className='border-t flex p-3'>
          <img src='https://ui-avatars.com/api/?background=0D8ABC&color=fff' alt='Avatar' className='w-10 h-10 rounded-md' />
          <div className={`
            flex justify-between items-center
            overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}
          `}
          >
            <div className='leading-4'>
              <h4 className='font-semibold'>Nombre de usuario</h4>
              <span className='text-xs text-gray-600'>correo@correo.com</span>
            </div>
            <VerticalMenu size={20} color='#384158' />
          </div>
        </div>

      </nav>
    </aside>
  )
}

export const SidebarItem = ({ icon, href, text, active, alert }) => {
  const { expanded } = useContext(SidebarContext)
  return (
    <li className={`
    relative flex items-center py-2 px-3 my-1
    font-medium rounded-md cursor-pointer
    transition-colors group
    ${
      active
        ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
        : 'hover:bg-indigo-50 text-gray-600'
    }
    `}
    >
      <NavLink href={href} className='w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500'>
        {icon}
        <span className={`overflow-hidden transition-all ${expanded ? 'w-32 ml-3 text-sm font-medium px-5 self-center' : 'w-0'}`}>
          {text}
        </span>
        {alert && (
          <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? '' : 'top-2'}`} />
        )}
      </NavLink>

      {!expanded && (
        <div className={`
        absolute left-full rounded-md px-2 py-1 ml-6
        bg-indigo-100 text-indigo-800 text-sm
        invisible opacity-20 -translate-x-3 transition-all
        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 z-10
      `}
        >
          {text}
        </div>
      )}
    </li>
  )
}
