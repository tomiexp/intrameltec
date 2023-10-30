/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
import { usePage } from '@inertiajs/react'
import { ReportIcon } from '@/Components/icons/Icons'
import NavDropdown from '@/Components/NavDropdown'
import Dropdown from '@/Components/Dropdown'

export default function NavKpis () {
  const { ziggy } = usePage().props
  const { kpis } = ziggy
  return (
    <>
      {kpis.map((kpi, i) => {
        if (kpi.kpi.length !== 0) {
          return (
            <div key={i} className='w-full flex items-center justify-around space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500'>
              <ReportIcon size={32} color='#395181' />
              <NavDropdown menu={kpi.category}>
                {kpi.kpi.map((data) => (
                  <Dropdown.Link key={data.id} href={route('kpi.reports.show', data.id)}>{data.reportName}</Dropdown.Link>
                ))}
              </NavDropdown>
            </div>
          )
        }
      })}
    </>
  )
}
