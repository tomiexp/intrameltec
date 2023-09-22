import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
export const showAlert = ({ title, text, icon, loading }) => {
  return MySwal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    allowOutsideClick: false,
    didClose: () => {
      if (loading) {
        MySwal.showLoading({
          title: 'Generando cotizaciones, por favor espere',
          allowEscapeKey: false,
          allowOutsideClick: false
        })
      }
    }
  })
}

export const handleSwalSuccess = ({ message, ...options }) => {
  return MySwal.fire({
    icon: 'success',
    title: '¡Éxito!',
    text: message,
    ...options
  })
}

export const handleSwalError = ({ message }) => {
  return MySwal.fire({
    icon: 'error',
    title: 'Oops...',
    text: message
  })
}
