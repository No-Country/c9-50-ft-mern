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

export const getTurnos = (token) => {
  return async () => {
    try {
      const res = await axios.get('/api/calendar/get', {
        headers: { Authorization: `Bearer ${token}` }
      })
      return res.data
    } catch (error) {
      return { message: error.message }
    }
  }
}

export const addCalendar = (token, datos) => {
  return async () => {
    try {
      const res = await axios.post('/api/calendar/create', datos, {
        headers: { Authorization: `Bearer ${token}` }
      })
      return res.data
    } catch (error) {
      return { message: error.message }
    }
  }
}

export const deleteCalendar = (id, token) => {
  return async () => {
    try {
      const res = await axios.delete(`/api/calendar/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      return res.data
    } catch (error) {
      return { message: error.message }
    }
  }
}
