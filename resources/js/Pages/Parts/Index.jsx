import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { Input, Select, SelectItem, CheckboxGroup, Checkbox } from '@nextui-org/react'

export default function Parts ({ auth, modifiableparts, soParts, aditionals }) {
  const handleModificablesParts = (e) => {
    console.log(e.target)
  }
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className='font-semibold text-xl text-gray-800 leading-tight'>Partes del servidor</h2>}
    >
      <Head title='Partes del servidor' />

      <section className='py-12'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
            <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-0 lg:py-16 lg:grid-cols-12'>
              <div className='mr-auto place-self-center lg:col-span-7'>
                <h2 className='max-w-2xl mb-4 text-2xl text-center font-bold mt-3'>
                  Calculadora de Precios para nuevo Servidor
                </h2>
                <form>
                  <div className='flex gap-2'>
                    {modifiableparts.map(({ id, product, description, usdPrice }) => (
                      <Input key={id} type='number' label={`Cantidad de ${product}`} radius='sm' labelPlacement='inside' onChange={handleModificablesParts} />
                    ))}
                  </div>
                  <div className='flex my-2 gap-2'>
                    <Select label='Sistema Operativo S.O' className='max-w-xs text-black'>
                      {soParts.map(({ id, product, description, usdPrice }) => (
                        <SelectItem key={id} value={usdPrice}> {product} </SelectItem>
                      ))}
                    </Select>
                  </div>
                  <div className='flex gap-2'>
                    <CheckboxGroup label='Adicionales'>
                      {aditionals.map(({ id, product, description, usdPrice }) => (
                        <Checkbox key={id} value={usdPrice}> {product} </Checkbox>
                      ))}
                    </CheckboxGroup>
                  </div>
                </form>
              </div>
              <div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
                <img src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png' alt='imagen de prueba' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </AuthenticatedLayout>
  )
}

/**
 * created_at
:
"2023-08-30T16:23:45.000000Z"
description
:
"Cantidad de Nucleos de CPU a dedicar"
id
:
1
product
:
"CPU"
type_id
:
2
updated_at
:
"2023-08-30T16:23:45.000000Z"
usdPrice
:
"7.95"
 */
