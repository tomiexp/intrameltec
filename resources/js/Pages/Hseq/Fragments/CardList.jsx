import CardComponent from '../Components/CardComponent'

export default function CardList ({ documents, user }) {
  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-2 m-5 gap-5'>
      {documents.map(({ hseqFilename, id }) => (
        <CardComponent key={id} name={hseqFilename} size={800} id={id} user={user} />
      ))}
    </div>
  )
}
