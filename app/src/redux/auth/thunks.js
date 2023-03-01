import axios from 'axios'
import { checkingCredentials, errorHandler, login, logout } from './authSlice'
import { toast } from 'react-toastify'
export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}
export const startRememberUser = () => {
  return async (dispatch) => {
    const userInfoLocal = JSON.parse(window.localStorage.getItem('userInfo'))
    const userInfoSesion = JSON.parse(window.sessionStorage.getItem('userInfo'))
    if (userInfoLocal === null && userInfoSesion === null) return
    if (userInfoLocal !== null) {
      dispatch(login(userInfoLocal))
    } else {
      dispatch(login(userInfoSesion))
    }
  }
}

export const startLogin = (data, remember) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    try {
      const { data: res } = await axios.post('/api/user/login', data)
      const response = {
        name: res.payload.name,
        role: res.payload.role,
        id: res.payload._id,
        token: res.payload.token,
        bornDate: res.payload.bornDate,
        email: res.payload.email,
        occupation: res.payload.occupation,
        error: res.error,
        errorMessage: res.error ? res.message : null
      }
      if (remember) {
        window.localStorage.setItem(
          'userInfo',
          JSON.stringify({
            name: res.payload.name,
            role: res.payload.role,
            id: res.payload._id,
            bornDate: res.payload.bornDate,
            email: res.payload.email,
            occupation: res.payload.occupation,
            token: res.payload.token
          })
        )
      } else {
        window.sessionStorage.setItem(
          'userInfo',
          JSON.stringify({
            name: res.payload.name,
            role: res.payload.role,
            id: res.payload._id,
            token: res.payload.token,
            bornDate: res.payload.bornDate,
            email: res.payload.email,
            occupation: res.payload.occupation
          })
        )
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
export const startLogout = (token) => {
  return async (dispatch) => {
    await axios.get('/api/user/logout', { headers: { Authorization: `Barer ${token}` } })
    window.localStorage.clear()
    window.sessionStorage.clear()
    dispatch(logout())
  }
}
export const startRecovery = (data, remember) => {
  return async (dispatch) => {
    try {
      const { data: res } = await axios.post('/api/user/recover', data)
      toast.success(res.message)
    } catch (error) {
      console.log(error, 'failed')
    }
  }
}

export const startChangePass = (data, token) => {
  return async (dispatch) => {
    try {
      const { data: res } = await axios.post('/api/user/changePassword', data, { headers: { Authorization: `Bearer ${token}` } })
      toast.success(res.message)
    } catch (error) {
      console.log(error, 'failed')
    }
  }
}

export const startUpdateRegister = (data, token) => {
  return async (dispatch) => {
    try {
      const { data: res } = await axios.post('/api/user/modifyUser', data, { headers: { Authorization: `Bearer ${token}` } })
      toast.success(res.message)
    } catch (error) {
      console.log(error, 'failed')
    }
  }
}
