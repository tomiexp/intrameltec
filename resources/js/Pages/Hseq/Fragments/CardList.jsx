import { usePage } from '@inertiajs/react'
import CardComponent from '../Components/CardComponent'
import Paginator from '@/Components/Paginator'

export default function CardList ({ user }) {
  const { documents } = usePage().props
  return (
    <>
      <div className='grid lg:grid-cols-5 sm:grid-cols-2 m-5 gap-5'>
        {documents.data.length !== 0
          ? documents.data.map(({ hseqFilename, id }) => (
            <CardComponent key={id} name={hseqFilename} size={800} id={id} user={user} />
          ))
          : <p> No hay datos para mostrar </p>}
      </div>

      <Paginator paginate={documents.links} />
    </>
  )
}
