import axios from 'axios'
import { toast } from 'react-toastify'

export const AxiosInterceptor = () => {
  axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      const message = error.response.data.message
      toast.error(message ?? error.response.statusText)
      return Promise.reject(error)
    }
  )
}
