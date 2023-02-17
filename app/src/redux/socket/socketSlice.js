import { createSlice } from '@reduxjs/toolkit'
import { io } from 'socket.io-client'

const initialState = {
  online: false
}

export const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    connect: (state, { payload }) => {
      try {
        const socket = io('ws://localhost:3002', {
          transports: ['websocket'],
          autoConnect: true,
          forceNew: true,
          query: { token: payload }
        })

        state.online = true

        console.log(socket)
      } catch (error) {
        throw new Error(error)
      }
    }
  }
})

export const { connect } = socketSlice.actions
export default socketSlice.reducer
