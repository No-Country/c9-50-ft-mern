import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  status: 'checking', // 'checking', 'authenticated', 'not-authenticated'
  isLoading: false,
  email: null,
  name: null,
  role: null,
  id: null,
  token: null,
  error: null,
  bornDate: null,
  occupation: null,
  errorMessage: null
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.status = 'authenticated'
      state.email = payload.email
      state.name = payload.name
      state.role = payload.role
      state.id = payload.id
      state.token = payload.token
      state.isLoading = false
      state.error = payload.error
      state.errorMessage = null
      state.bornDate = payload.bornDate
      state.occupation = payload.occupation
    },
    checkingCredentials: (state) => {
      state.status = 'checking'
      state.isLoading = true
    },
    errorHandler: (state, { payload }) => {
      state.error = payload.error
      state.errorMessage = payload.errorMessage
    },
    logout: (state, { payload }) => {
      state.status = 'not-authenticated'
      state.email = null
      state.name = null
      state.role = null
      state.id = null
      state.token = null
      state.isLoading = false
      state.error = null
      state.errorMessage = null
    }
  }
})
export const { login, checkingCredentials, logout, errorHandler } = authSlice.actions
export default authSlice.reducer
