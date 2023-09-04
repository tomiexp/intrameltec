import { Input } from '@nextui-org/react'

export const ClientForm = () => {
  return (
    <form>

      <div className='flex gap-2'>
        <Input type='text' label='Nombre del cliente' radius='sm' labelPlacement='inside' isRequired />
        <Input type='email' label='Correo electronico del cliente' radius='sm' labelPlacement='inside' isRequired />
      </div>

      <div className='flex gap-2 py-4'>
        <Input type='tel' label='Celular del cliente' radius='sm' labelPlacement='inside' isRequired />
        <Input
          type='number' label='Nùmero de Identificacion' radius='sm' labelPlacement='inside' isRequired startContent={
            <div className='pointer-events-none flex items-center'>
              <span className='text-default-400 text-small'>C.C</span>
            </div>
        }
        />
      </div>
    </form>
  )
}
