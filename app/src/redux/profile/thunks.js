import axios from 'axios'
import { loadProfile, loadActiveChat, loadingChat } from './profileSlice'

export const getChats = (token, name) => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/api/chat', { headers: { Authorization: `Bearer ${token}` } })
      dispatch(loadProfile({ chats: res.data.payload, name }))
    } catch (error) {
      const response = {
        error: error.error,
        errorMessage: error.message
      }
      console.log(error, 'failed', response)
    }
  }
}
export const getChatById = (chatId, token) => {
  return async (dispatch) => {
    try {
      dispatch(loadingChat())
      const res = await axios.get(`/api/chat/${chatId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      dispatch(loadActiveChat({ activeChat: res.data.payload }))
    } catch (error) {
      const response = {
        error: error.error,
        errorMessage: error.message
      }
      console.log(error, 'failed', response)
    }
  }
}

export const createNewChat = (token, colaboratorId) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('/api/chat', colaboratorId, {
        headers: { Authorization: `Bearer ${token}` }
      })
      console.log(res.data)
    } catch (error) {
      const response = {
        error: error.error,
        errorMessage: error.message
      }
      console.log(error, 'failed', response)
    }
  }
}
