import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  status: 'checking', // 'checking', 'authenticated', 'not-authenticated'
  isLoading: false,
  email: null,
  name: null,
  role: null,
  token: null,
  error: null,
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
      state.token = payload.token
      state.isLoading = false
      state.error = payload.error
      state.errorMessage = null
    },
    checkingCredentials: (state) => {
      state.status = 'checking'
      state.isLoading = true
    }
  }
})
export const { login, checkingCredentials } = authSlice.actions
export default authSlice.reducer
