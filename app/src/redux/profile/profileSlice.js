import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: false,
  chats: [],
  activeChat: null,
  message: null,
  messages: [],
  oldChats: []
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    loadProfile: (state, { payload }) => {
      state.name = payload.name
      state.chats = payload.chats
    },
    sendMessage: (state, { payload }) => {
      state.message = payload.message
      state.messages = payload.messages
    }
  }
})

export const { loadProfile, sendMessage } = profileSlice.actions
export default profileSlice.reducer
