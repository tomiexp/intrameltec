import { Input, Select, SelectItem, Checkbox, Button } from '@nextui-org/react'
import { useState, useEffect } from 'react'
import { calculateTotal } from '../logic/calculatedTotal'
import { PARTSNAME, NAMEPARTS } from '../logic/partsNameConst'

export const FormCalculator = ({ soParts, parts }) => {
  const [total, setTotal] = useState(0)
  const [selectedValues, setSelectedValues] = useState({
    cpuCores: 0,
    ram: 0,
    storage: 0,
    bandwidth: 0,
    backup: 1,
    security: 1,
    support: 1,
    snapchot: 1,
    so: 0,
    sql2core: 0,
    rdp: 0,
    ip: 0,
    sql2extra: 0
  })

  const [isChecked, setIsChecked] = useState(false)

  const partsPrice = {
    cpuPart: parseFloat(parts.find(part => part.product === PARTSNAME.cpuCores).usdPrice),
    ramPart: parseFloat(parts.find(part => part.product === PARTSNAME.ram).usdPrice),
    storagePart: parseFloat(parts.find(part => part.product === PARTSNAME.storage).usdPrice),
    brandwichPart: parseFloat(parts.find(part => part.product === PARTSNAME.bandwidth).usdPrice),
    sql2core: parseFloat(parts.find(part => part.product === PARTSNAME.sql2core).usdPrice),
    backup: parseFloat(parts.find(part => part.product === PARTSNAME.backup).usdPrice),
    security: parseFloat(parts.find(part => part.product === PARTSNAME.security).usdPrice),
    support: parseFloat(parts.find(part => part.product === PARTSNAME.support).usdPrice),
    snapchot: parseFloat(parts.find(part => part.product === PARTSNAME.snapchot).usdPrice),
    rdp: parseFloat(parts.find(part => part.product === PARTSNAME.rdp).usdPrice),
    ip: parseFloat(parts.find(part => part.product === PARTSNAME.ip).usdPrice),
    sql2extra: parseFloat(parts.find(part => part.product === PARTSNAME.sql2extra).usdPrice)
  }

  useEffect(() => {
    const newTotalPrice = calculateTotal({ selectedValues, partsPrice })
    setTotal(newTotalPrice)
  }, [selectedValues])

  const handleInput = (e, field) => {
    let value = e.target.value

    if (field === 'so') {
      value = parseInt(value) ? parseInt(value) : 4
      value = parseFloat(parts.find(part => part.id === value).usdPrice)
    } else if (field === 'sql2core' || field === 'rdp' || field === 'ip') {
      value = e.target.checked ? partsPrice[field] : 0
    } else {
      value = parseInt(value)
    }

    setSelectedValues((prevValues) => ({
      ...prevValues,
      [field]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.localStorage.setItem('partsAmout', JSON.stringify(selectedValues))
  }

  const deleteParts = (e) => {
    e.preventDefault()
    window.localStorage.removeItem('partsAmout')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex gap-2'>
        <Input
          type='number' label='Nucleos de CPU' radius='sm' labelPlacement='inside' isRequired description='Procesador' min={1} onChange={(e) => handleInput(e, 'cpuCores')} endContent={
            <div className='pointer-events-none flex items-center'>
              <span className='text-default-400 text-small'>Nucleos</span>
            </div>
                      }
        />
        <Input
          type='number' label='Memoria RAM' isRequired min={1} radius='sm' labelPlacement='inside' description='Memoria RAM' onChange={(e) => handleInput(e, 'ram')} endContent={
            <div className='pointer-events-none flex items-center'>
              <span className='text-default-400 text-small'>GB</span>
            </div>
                      }
        />
      </div>
      <div className='flex gap-2'>
        <Input
          type='number' label='Almacenamiento' isRequired radius='sm' labelPlacement='inside' description='Almacenamiento' min={1} onChange={(e) => handleInput(e, 'storage')} endContent={
            <div className='pointer-events-none flex items-center'>
              <span className='text-default-400 text-small'>GB</span>
            </div>
                      }
        />
        <Input
          type='number' label='Ancho de Banda' isRequired radius='sm' labelPlacement='inside' description='Ancho de Banda' min={1} onChange={(e) => handleInput(e, 'bandwidth')} endContent={
            <div className='pointer-events-none flex items-center'>
              <span className='text-default-400 text-small'>Mb/s</span>
            </div>
                      }
        />
      </div>
      <div className='flex my-2 gap-2 '>
        <Select label='Sistema Operativo S.O' className='max-w-xs text-black' onChange={(e) => handleInput(e, 'so')} isRequired defaultValue={0}>
          {soParts.map(({ id, product, usdPrice }) => (
            <SelectItem key={id} value={usdPrice} textValue={product}> {product} </SelectItem>
          ))}
        </Select>
      </div>
      <div className='flex gap-2'>
        <Checkbox onChange={() => {
          setIsChecked(!isChecked)
          if (!isChecked) {
            setSelectedValues((prevValues) => ({
              ...prevValues,
              sql2core: 0,
              rdp: 0,
              ip: 0,
              sql2extra: 0
            }))
          }
        }}
        >¿Desea Añadir adicionales?
        </Checkbox>
      </div>
      {isChecked && (
        <div className='flex gap-2 my-6'>
          <Checkbox onChange={(e) => handleInput(e, 'sql2core')}>Licencia SQL 2 CORE</Checkbox>
          <Checkbox onChange={(e) => handleInput(e, 'rdp')}>Licencia RDP SPLA</Checkbox>
          <Checkbox onChange={(e) => handleInput(e, 'ip')}>IP Publica</Checkbox>
          <Input
            type='number' label='Usuarios Extra de SQL 2 Server' radius='sm' labelPlacement='inside' description='Usuarios Extra de SQL 2 Server' min={1} onChange={(e) => handleInput(e, 'sql2extra')} endContent={
              <div className='pointer-events-none flex items-center'>
                <span className='text-default-400 text-small'>Usuarios</span>
              </div>
                      }
          />
        </div>
      )}
      <div className='py-2 flex justify-center'>
        <h2 className='text-2xl'>Total del Servidor: </h2>
        <p className='text-2xl font-bold ml-2'> ${total.toFixed(2)} USD </p>
      </div>
      <div className='py-2 flex justify-end gap-2'>
        <Button type='submit'>Generar Cotizacion</Button>
        <Button type='button' onClick={deleteParts}>Cancelar</Button>
      </div>
    </form>
  )
}
