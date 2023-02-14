import axios from 'axios'
import { checkingCredentials, errorHandler, login, logout } from './authSlice'
import { toast } from 'react-toastify'
export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startLogin = (data, remember) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    try {
      console.log(data, remember)
      const { data: res } = await axios.post('/api/user/login', data)
      console.log(res)
      if (remember) {
        // todo no funciona esto
        window.localStorage.setItem('token', res.payload.token)
      } else {
        window.sessionStorage.setItem('token', res.payload.token)
      }
      const response = {
        email: null,
        name: res.payload.name,
        role: res.payload.role,
        id: res.payload._id,
        token: res.payload.token,
        error: res.error,
        errorMessage: res.error ? res.message : null
      }
      dispatch(login(response))
    } catch (error) {
      console.log(error, 'failed')
      const response = {
        error: error.error,
        errorMessage: error.message
      }
      dispatch(errorHandler(response))
      dispatch(logout())
    }
  }
}
export const startRegister = (data) => {
  return async (dispatch) => {
    try {
      if (data.isColaborator) {
        const role = { tipo: 'COLABORATOR' }
        const res = await axios.post('/api/user/register', { ...data, role })
        if (res.data === 'User created succefully') {
          return toast('Wow so easy !')
        }
      } else {
        const role = { tipo: 'PATIENT' }
        await axios.post('/api/user/register', { ...data, role })
      }
      toast.success('Usuario Registrado correctamente')
    } catch (error) {
      console.log(error, 'failed')
      const response = {
        error: error.error,
        errorMessage: error.message
      }
      dispatch(errorHandler(response))
    }
  }
}
export const startLogout = () => {
  return async (dispatch) => {
    window.localStorage.clear()
    window.sessionStorage.clear()
    dispatch(logout())
  }
}
