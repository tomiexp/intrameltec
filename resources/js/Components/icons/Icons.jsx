export const ArrowDown = () => {
  return (
    <svg
      className='ml-2 -mr-0.5 h-4 w-4'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
    >
      <path
        fillRule='evenodd'
        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export const ViewIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
      <path d='M12 15a3 3 0 100-6 3 3 0 000 6z' />
      <path fillRule='evenodd' d='M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z' clipRule='evenodd' />
    </svg>
  )
}

export const EditIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
      <path d='M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z' />
      <path d='M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z' />
    </svg>
  )
}

export const AddIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
      <path fillRule='evenodd' d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z' clipRule='evenodd' />
    </svg>
  )
}

export const NotificationIcon = ({ size, height, width, ...props }) => {
  return (
    <svg
      fill='none'
      height={size || height || 24}
      viewBox='0 0 24 24'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        clipRule='evenodd'
        d='M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  )
}

export const BackIcon = ({ size, ...props }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M4 12H20M4 8H20M4 16H12' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  )
}

export const HomeIcon = ({ size, color, ...props }) => {
  return (
    <svg fill={color} width={size} height={size} viewBox='0 0 1920 1920' xmlns='http://www.w3.org/2000/svg' {...props}><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'> <path d='M960.16 1083.131c-92.279 0-167.374-75.095-167.374-167.373 0-92.28 75.095-167.374 167.374-167.374s167.374 75.095 167.374 167.374c0 92.278-75.095 167.373-167.374 167.373ZM960.16 0 28 932.049l79 79 127.874-127.985V1920h557.912v-557.912h334.748V1920h557.912V883.064l127.874 127.985 79-79L960.16 0Z' fillRule='evenodd' /> </g></svg>
  )
}

export const DatacenterIcon = ({ size, color, ...props }) => {
  return (
    <svg viewBox='0 0 24 24' width={size} height={size} xmlns='http://www.w3.org/2000/svg' fill={color} {...props}><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'><path fill='none' d='M13 16h2v2h-2zm4 0h2v2h-2zM13 6h2v2h-2zm4 0h2v2h-2z' /><path d='M20 3H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-5 5h-2V6h2v2zm4 0h-2V6h2v2zm1 5H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-5 5h-2v-2h2v2zm4 0h-2v-2h2v2z' /></g></svg>
  )
}

export const ReportIcon = ({ size, color, ...props }) => {
  return (
    <svg fill={color} height={size} width={size} version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 472.615 472.615' xmlSpace='preserve' {...props}><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'> <g> <g> <polygon points='351.738,9.848 351.738,88.615 430.504,88.615 ' /> </g> </g> <g> <g> <path d='M332.045,108.308V0H32.265v472.615H440.35V108.308H332.045z M157.068,422.141H84.453V213.73h72.615V422.141z M272.615,422.141h-72.615V272.807h72.615V422.141z M388.162,422.141h-72.615v-90.257h72.615V422.141z' /> </g> </g> </g></svg>
  )
}

export const ToolIcon = ({ size, color, ...props }) => {
  return (
    <svg viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' fill={color} width={size} height={size} {...props}><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'><path d='M772.672 575.808V448.192l70.848-70.848a370.688 370.688 0 0 0-56.512-97.664l-96.64 25.92-110.528-63.808-25.92-96.768a374.72 374.72 0 0 0-112.832 0l-25.92 96.768-110.528 63.808-96.64-25.92c-23.68 29.44-42.816 62.4-56.576 97.664l70.848 70.848v127.616l-70.848 70.848c13.76 35.264 32.832 68.16 56.576 97.664l96.64-25.92 110.528 63.808 25.92 96.768a374.72 374.72 0 0 0 112.832 0l25.92-96.768 110.528-63.808 96.64 25.92c23.68-29.44 42.816-62.4 56.512-97.664l-70.848-70.848z m39.744 254.848l-111.232-29.824-55.424 32-29.824 111.36c-37.76 10.24-77.44 15.808-118.4 15.808-41.024 0-80.768-5.504-118.464-15.808l-29.888-111.36-55.424-32-111.168 29.824A447.552 447.552 0 0 1 64 625.472L145.472 544v-64L64 398.528A447.552 447.552 0 0 1 182.592 193.28l111.168 29.824 55.424-32 29.888-111.36A448.512 448.512 0 0 1 497.472 64c41.024 0 80.768 5.504 118.464 15.808l29.824 111.36 55.424 32 111.232-29.824c56.32 55.68 97.92 126.144 118.592 205.184L849.472 480v64l81.536 81.472a447.552 447.552 0 0 1-118.592 205.184zM497.536 627.2a115.2 115.2 0 1 0 0-230.4 115.2 115.2 0 0 0 0 230.4z m0 76.8a192 192 0 1 1 0-384 192 192 0 0 1 0 384z' fill='#000000' /></g></svg>
  )
}

export const DownloadIcon = ({ size, ...props }) => {
  return (
    <svg viewBox='0 0 24 24' width={size} height={size} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'> <path d='M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' /> </g></svg>
  )
}

export const SellerIcon = ({ size, ...props }) => {
  return (
    <svg fill='#000000' height={size} width={size} version='1.2' baseProfile='tiny' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='-351 153 256 256' xmlSpace='preserve' {...props}><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'> <path id='group' d='M-276.9,265.2h19v14.9h-19V265.2z M-214,253.6h79.5v9.6H-214V253.6z M-214,295.8h79.5v9.6H-214V295.8z M-164.6,251.4c6.1,0,11.1-5.1,11.1-11.3s-5-11.3-11.1-11.3s-11.1,5.1-11.1,11.3S-170.7,251.4-164.6,251.4z M-184.4,250.6 c3.8,0,6.8-3.1,6.8-6.9c0-3.9-3-6.9-6.8-6.9c-3.8,0-6.8,3.1-6.8,6.9C-191.2,247.6-188.2,250.6-184.4,250.6z M-198.3,251.3 c2.5,0,4.4-2,4.4-4.5c0-2.5-1.9-4.5-4.4-4.5s-4.4,2-4.4,4.5C-202.7,249.2-200.7,251.3-198.3,251.3z M-181.4,277.5h28v14.7h-28V277.5 z M-198.2,277.5h8.7v14.7h-8.7V277.5z M-267.1,227.5c9.5,0,17.1,7.7,17.1,17.1s-7.7,17.1-17.1,17.1s-17.1-7.7-17.1-17.1 S-276.6,227.5-267.1,227.5z M-293,291c0-1.3,1.1-2,2-2c1.3,0,2,0.9,2,2v24.7h8.5v-35.6v-14.9h-6.7c-12,0-19.5,9.8-19.5,22.2v28.3 h13.4V291H-293z M-221.8,154.4L-341,179.8v13.5l8.7-0.1v0.1l0,0v213.5h216v-85.7V193.3h8.7v-13.9L-221.8,154.4z M-130.7,321.1 h-186.9V193.3h186.9V321.1z M-254.5,280.1v35.6h8.7V291c0-1.3,1.1-2,2-2c1.3,0,2,1.1,2,2v24.7h13.4v-28c0.2-12.5-7.3-22.4-19.5-22.4 h-6.8v14.9H-254.5z' /> </g></svg>
  )
}
