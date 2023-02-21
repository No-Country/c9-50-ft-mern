import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../redux/auth/authSlice'
import socketReducer from '../redux/socket/socketSlice'
import profileReducer from '../redux/profile/profileSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    socket: socketReducer,
    profile: profileReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
