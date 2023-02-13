import axios from 'axios'
import { checkingCredentials, login } from './authSlice'

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startLogin = (data, remember) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    try {
      const { data: res } = await axios.post('/api/user/login', data)
      console.log(res)
      if (remember) {
        window.localStorage.setItem('token', res.payload.token)
      } else {
        window.sessionStorage.setItem('token', res.payload.token)
      }
      const response = {
        email: null,
        name: res.payload.name,
        role: res.payload.role,
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
      dispatch(login(response))
    }
  }
}
