import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../redux/auth/authSlice'
import socketReducer from '../redux/socket/socketSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    socket: socketReducer
  }
})
