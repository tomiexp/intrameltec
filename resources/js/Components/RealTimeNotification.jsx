import Echo from 'laravel-echo'
import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function RealTimeNotification ({ event }) {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    window.Echo.private(event)
      .notification((notification) => {
        toast.info(notification.message)
      })

    return () => {
      Echo.leave(event)
    }
  }, [])

  return (
    <ToastContainer autoClose={5000} />
  )
}
