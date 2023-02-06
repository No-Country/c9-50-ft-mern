import axios from 'axios'
import { toast } from 'react-toastify'

export const AxiosInterceptor = () => {
  axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      const response = error.response.data.data
      toast.error(response ? response.message : error.response.statusText)
      return Promise.reject(error)
    }
  )
}
