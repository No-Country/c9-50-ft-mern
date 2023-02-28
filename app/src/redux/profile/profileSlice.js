import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  chatId: null,
  loading: false,
  name: false,
  chats: [],
  activeChat: null,
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
    loadingChat: (state, { payload }) => {
      state.loading = true
    },
    loadActiveChat: (state, { payload }) => {
      state.loading = false
      state.activeChat = payload.activeChat
      state.messages = payload.activeChat.messages
      state.chatId = payload.activeChat.infoInChat._id
    },
    addMessage: (state, { payload }) => {
      state.messages = [...state.messages, payload]
    }
  }
})

export const { loadProfile, loadActiveChat, addMessage, loadingChat } = profileSlice.actions
export default profileSlice.reducer
