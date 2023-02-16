import { createSlice } from '@reduxjs/toolkit'
import { io } from 'socket.io-client'

const initialState = {
  socket: undefined,
  online: false
}

export const authSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    connect: () => {
      try {
        const token = window.localStorage.getItem('token')

        const socket = io('ws://localhost:3002', {
          transports: ['websocket'],
          autoConnect: true,
          forceNew: true,
          query: { token }
        })

        socket.emit('message', 'world')
      } catch (error) {
        throw new Error(error)
      }
    }
  }
})

export const { connect } = authSlice.actions
export default authSlice.reducer
