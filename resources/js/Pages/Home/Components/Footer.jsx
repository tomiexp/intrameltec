export const HomeFooter = () => {
  return (
    <div className='flex justify-center mt-16 px-6 sm:items-center sm:justify-between'>
      <div className='text-center text-sm text-gray-500 dark:text-gray-400 sm:text-left'>
        <div className='flex items-center gap-4'>
          <p>Sitio web de Meltec en Desarrollo </p>
          <a className='hover:text-red-400' href='https://github.com/MeltecTi/intrameltec' target='_blank' rel='noreferrer'><p>Version <span className='font-extrabold'> Alpha 0.0.1 </span> - Github </p></a>
        </div>
      </div>
    </div>
  )
}
