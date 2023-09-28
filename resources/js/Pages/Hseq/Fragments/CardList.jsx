import CardComponent from '../Components/CardComponent'

export default function CardList () {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 m-5 gap-5'>
      <CardComponent name='Test 123456789adasdadwad' size={800} />
      <CardComponent name='Test 123456789adasdadwad' size={800} />
      <CardComponent name='Test 123456789adasdadwad' size={800} />
      <CardComponent name='Test 123456789adasdadwad' size={800} />
      <CardComponent name='Test 123456789adasdadwad' size={800} />
      <CardComponent name='Test 123456789adasdadwad' size={800} />
      <CardComponent name='Test 123456789adasdadwad' size={800} />
      <CardComponent name='Test 123456789adasdadwad' size={800} />
    </div>
  )
}
