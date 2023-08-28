import { useState } from 'react'
import { Table, TableColumn, TableHeader, TableBody, TableCell, TableRow, Avatar, Button } from '@nextui-org/react'
import { EditIcon } from '@/Components/icons/Icons'
import { ModalUser } from './ModalUser'

export const UsersTable = ({ users, roles }) => {
  const THEADS = ['Avatar', 'Id', 'Nombre de Usuario', 'Correo Electronico', 'Rol de Usuario', 'Acciones']

  const [modal, setModal] = useState(false)
  const [dataModal, setDataModal] = useState({
    id: '',
    nameRol: '',
    name: ''
  })

  const openModal = ({ id = '', nameRol = '', name = '' }) => {
    setModal(true)
    setDataModal({ id, nameRol, name })
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <>
      <Table aria-label='Tabla de Usuarios del sistema'>
        <TableHeader>
          {THEADS.map((column) => (
            <TableColumn key={column} className='border-b border-gray-100 bg-gray-50 p-4'>{column}</TableColumn>
          ))}
        </TableHeader>
        <TableBody emptyContent='No se encontraron usuarios registrados'>
          {users.map(({ id, name, avatar, email, roles }) => {
            const nameRol = roles[0].name
            return (
              <TableRow key={id}>
                <TableCell><Avatar src={avatar} /></TableCell>
                <TableCell>{id}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{nameRol}</TableCell>
                <TableCell>
                  <Button type='button' className='bg-gray-100 text-slate-600 font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white' onClick={() => openModal({ id, nameRol, name })}>
                    <EditIcon className='h-4 w-4' />
                  </Button>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      <ModalUser modal={modal} closeModal={closeModal} dataModal={dataModal} roles={roles} />
    </>
  )
}
