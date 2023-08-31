import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { Input, Select, SelectItem, CheckboxGroup, Checkbox } from '@nextui-org/react'
import { useEffect, useState } from 'react'

export default function Parts ({ auth, soParts, aditionals, parts }) {
  const [total, setTotal] = useState(0)
  const [selectedValues, setSelectedValues] = useState({
    cpuCores: 0,
    ram: 0,
    storage: 0,
    bandwidth: 0,
    backup: 0.045,
    security: 10,
    support: 100,
    snapchot: 2
  })

  const partsPrice = {
    cpuPart: parseFloat(parts.find(part => part.product === 'CPU').usdPrice),
    ramPart: parseFloat(parts.find(part => part.product === 'Memoria RAM').usdPrice),
    storagePart: parseFloat(parts.find(part => part.product === 'Almacenamiento').usdPrice),
    brandwichPart: parseFloat(parts.find(part => part.product === 'Internet').usdPrice)
  }

  const calculateTotal = () => {
    const cpuTotal = parseFloat(selectedValues.cpuCores * partsPrice.cpuPart)
    const ramTotal = parseFloat(selectedValues.ram * partsPrice.ramPart)
    const ddTotal = parseFloat(selectedValues.storage * partsPrice.storagePart)
    const brandTotal = parseFloat(selectedValues.bandwidth * partsPrice.brandwichPart)

    const totalPrice = cpuTotal + ramTotal + ddTotal + brandTotal

    return totalPrice
  }

  useEffect(() => {
    const newTotalPrice = calculateTotal()
    setTotal(newTotalPrice + selectedValues.backup + selectedValues.security + selectedValues.support + selectedValues.snapchot)
  }, [selectedValues])

  const handleCpu = (e) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      cpuCores: parseInt(e.target.value)
    }))
  }

  const handleRam = (e) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      ram: parseInt(e.target.value)
    }))
  }

  const handleDD = (e) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      storage: parseInt(e.target.value)
    }))
  }

  const handleBrand = (e) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      bandwidth: parseInt(e.target.value)
    }))
  }

  const handleSo = (e) => {
    console.log(e.target.value)
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
                    <Input
                      type='number' label='Numero de Nucleos de CPU' radius='sm' labelPlacement='inside' description='Procesador' min={1} onChange={handleCpu} endContent={
                        <div className='pointer-events-none flex items-center'>
                          <span className='text-default-400 text-small'>Nucleos</span>
                        </div>
                      }
                    />
                    <Input
                      type='number' label='Memoria RAM' min={1} radius='sm' labelPlacement='inside' description='Memoria RAM' onChange={handleRam} endContent={
                        <div className='pointer-events-none flex items-center'>
                          <span className='text-default-400 text-small'>GB</span>
                        </div>
                      }
                    />
                  </div>
                  <div className='flex gap-2'>
                    <Input
                      type='number' label='Almacenamiento' radius='sm' labelPlacement='inside' description='Almacenamiento' min={1} onChange={handleDD} endContent={
                        <div className='pointer-events-none flex items-center'>
                          <span className='text-default-400 text-small'>GB</span>
                        </div>
                      }
                    />
                    <Input
                      type='number' label='Ancho de Banda' radius='sm' labelPlacement='inside' description='Ancho de Banda' min={1} onChange={handleBrand} endContent={
                        <div className='pointer-events-none flex items-center'>
                          <span className='text-default-400 text-small'>Mb/s</span>
                        </div>
                      }
                    />
                  </div>
                  <div className='flex my-2 gap-2'>
                    <Select label='Sistema Operativo S.O' className='max-w-xs text-black' onChange={handleSo}>
                      {soParts.map(({ id, product, description, usdPrice }) => (
                        <SelectItem key={id} value={usdPrice} textValue={product}> {product} </SelectItem>
                      ))}
                    </Select>
                  </div>
                  <div className='flex gap-2'>
                    <CheckboxGroup label='Adicionales'>
                      {aditionals.map(({ id, product }) => (
                        <Checkbox key={id} value={id} onChange={handleSo}> {product} </Checkbox>
                      ))}
                    </CheckboxGroup>
                  </div>
                </form>
                <div className='py-2 flex justify-center'>
                  <h2 className='text-2xl'>Total del Servidor: </h2>
                  <p className='text-2xl font-bold ml-2'> ${total.toFixed(2)} USD </p>

                </div>
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
