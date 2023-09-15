import Dropdown from './Dropdown'
import { ArrowDown } from './icons/Icons'

export default function NavDropdown ({ menu, children }) {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <span className='inline-flex rounded-md justify-between'>
          <button className='inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150' type='button'>
            {menu}
            <ArrowDown />
          </button>
        </span>
      </Dropdown.Trigger>

      <Dropdown.Content>
        {children}
      </Dropdown.Content>

    </Dropdown>
  )
}
