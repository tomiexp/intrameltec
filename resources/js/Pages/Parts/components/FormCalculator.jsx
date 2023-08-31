import { Input, Select, SelectItem, Checkbox } from '@nextui-org/react'
import { useState, useEffect } from 'react'

export const FormCalculator = ({ soParts, parts }) => {
  const [total, setTotal] = useState(0)
  const [selectedValues, setSelectedValues] = useState({
    cpuCores: 0,
    ram: 0,
    storage: 0,
    bandwidth: 0,
    backup: 0.045,
    security: 10,
    support: 100,
    snapchot: 2,
    so: 0,
    sql2core: 0,
    rdp: 0,
    sql2extra: 0
  })

  const [isChecked, setIsChecked] = useState(false)

  const partsPrice = {
    cpuPart: parseFloat(parts.find(part => part.product === 'CPU').usdPrice),
    ramPart: parseFloat(parts.find(part => part.product === 'Memoria RAM').usdPrice),
    storagePart: parseFloat(parts.find(part => part.product === 'Almacenamiento').usdPrice),
    brandwichPart: parseFloat(parts.find(part => part.product === 'Internet').usdPrice),
    sql2core: parseFloat(parts.find(part => part.product === 'SQL 2 CORE').usdPrice),
    rdp: parseFloat(parts.find(part => part.product === 'RDP SPLA').usdPrice),
    ip: parseFloat(parts.find(part => part.product === 'IP Publica').usdPrice),
    sql2extra: parseFloat(parts.find(part => part.product === 'Usuario Adicional SQL 2 CORE').usdPrice)
  }

  const calculateTotal = () => {
    const cpuTotal = parseFloat(selectedValues.cpuCores * partsPrice.cpuPart) ? parseFloat(selectedValues.cpuCores * partsPrice.cpuPart) : 0
    const ramTotal = parseFloat(selectedValues.ram * partsPrice.ramPart) ? parseFloat(selectedValues.ram * partsPrice.ramPart) : 0
    const ddTotal = parseFloat(selectedValues.storage * partsPrice.storagePart) ? parseFloat(selectedValues.storage * partsPrice.storagePart) : 0
    const brandTotal = parseFloat(selectedValues.bandwidth * partsPrice.brandwichPart) ? parseFloat(selectedValues.bandwidth * partsPrice.brandwichPart) : 0
    const sql2extra = parseFloat(selectedValues.sql2extra * partsPrice.sql2extra) ? parseFloat(selectedValues.sql2extra * partsPrice.sql2extra) : 0
    const soTotal = parseFloat(selectedValues.so) ? parseFloat(selectedValues.so) : 0
    const backup = parseFloat(selectedValues.backup)
    const security = parseFloat(selectedValues.security)
    const support = parseFloat(selectedValues.support)
    const snapchot = parseFloat(selectedValues.snapchot)
    const sql2core = parseFloat(selectedValues.sql2core) ? parseFloat(selectedValues.sql2core) : 0
    const rdp = parseFloat(selectedValues.rdp) ? parseFloat(selectedValues.rdp) : 0
    const ip = parseFloat(selectedValues.ip) ? parseFloat(selectedValues.ip) : 0

    const totalPrice = cpuTotal + ramTotal + ddTotal + brandTotal + soTotal + backup + security + support + snapchot + sql2core + rdp + ip + sql2extra

    return totalPrice
  }

  useEffect(() => {
    const newTotalPrice = calculateTotal()
    setTotal(newTotalPrice)
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
    const value = parseInt(e.target.value) ? parseInt(e.target.value) : 4
    const soSelected = parseFloat(parts.find(part => part.id === value).usdPrice)
    console.log(soSelected)
    setSelectedValues((prevValues) => ({
      ...prevValues,
      so: soSelected
    }))
  }

  const handleExtra1 = (e) => {
    if (e.target.checked) {
      setSelectedValues((prevValues) => ({
        ...prevValues,
        sql2core: partsPrice.sql2core
      }))
    } else {
      setSelectedValues((prevValues) => ({
        ...prevValues,
        sql2core: 0
      }))
    }
  }
  const handleExtra2 = (e) => {
    if (e.target.checked) {
      setSelectedValues((prevValues) => ({
        ...prevValues,
        rdp: partsPrice.rdp
      }))
    } else {
      setSelectedValues((prevValues) => ({
        ...prevValues,
        rdp: 0
      }))
    }
  }
  const handleExtra3 = (e) => {
    if (e.target.checked) {
      setSelectedValues((prevValues) => ({
        ...prevValues,
        ip: partsPrice.ip
      }))
    } else {
      setSelectedValues((prevValues) => ({
        ...prevValues,
        ip: 0
      }))
    }
  }
  const handleExtra4 = (e) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      sql2extra: parseInt(e.target.value)
    }))
  }

  return (
    <form>
      <div className='flex gap-2'>
        <Input
          type='number' label='Nucleos de CPU' radius='sm' labelPlacement='inside' isRequired description='Procesador' min={1} onChange={handleCpu} endContent={
            <div className='pointer-events-none flex items-center'>
              <span className='text-default-400 text-small'>Nucleos</span>
            </div>
                      }
        />
        <Input
          type='number' label='Memoria RAM' isRequired min={1} radius='sm' labelPlacement='inside' description='Memoria RAM' onChange={handleRam} endContent={
            <div className='pointer-events-none flex items-center'>
              <span className='text-default-400 text-small'>GB</span>
            </div>
                      }
        />
      </div>
      <div className='flex gap-2'>
        <Input
          type='number' label='Almacenamiento' isRequired radius='sm' labelPlacement='inside' description='Almacenamiento' min={1} onChange={handleDD} endContent={
            <div className='pointer-events-none flex items-center'>
              <span className='text-default-400 text-small'>GB</span>
            </div>
                      }
        />
        <Input
          type='number' label='Ancho de Banda' isRequired radius='sm' labelPlacement='inside' description='Ancho de Banda' min={1} onChange={handleBrand} endContent={
            <div className='pointer-events-none flex items-center'>
              <span className='text-default-400 text-small'>Mb/s</span>
            </div>
                      }
        />
      </div>
      <div className='flex my-2 gap-2 '>
        <Select label='Sistema Operativo S.O' className='max-w-xs text-black' onChange={handleSo} isRequired defaultValue={0}>
          {soParts.map(({ id, product, usdPrice }) => (
            <SelectItem key={id} value={usdPrice} textValue={product}> {product} </SelectItem>
          ))}
        </Select>
      </div>
      <div className='flex gap-2'>
        <Checkbox onChange={() => {
          setIsChecked(!isChecked)
          console.log(isChecked)
        }}
        >¿Desea Añadir adicionales?
        </Checkbox>
      </div>
      {isChecked && (
        <div className='flex gap-2 my-6'>
          <Checkbox onChange={handleExtra1}>Licencia SQL 2 CORE</Checkbox>
          <Checkbox onChange={handleExtra2}>Licencia RDP SPLA</Checkbox>
          <Checkbox onChange={handleExtra3}>IP Publica</Checkbox>
          <Input
            type='number' label='Usuarios Extra de SQL 2 Server' radius='sm' labelPlacement='inside' description='Usuarios Extra de SQL 2 Server' min={1} onChange={handleExtra4} endContent={
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
    </form>
  )
}
