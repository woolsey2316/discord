import axios from 'axios'

const api = axios.create({
  baseURL: 'localhost:5000/',
})

export const sendMessage = (payload : Object) => api.post('/message', payload)
export const getAllMessages = () => api.get('/messages')
export const editMessageById = (id : Number, payload : String) =>
  api.put(`/message/${id}`, payload)
export const deleteMessageById = (id : Number) => api.delete(`/message/${id}`)
export const getMessageById = (id : Number)  => api.get(`/message/${id}`)

const apis = {
  sendMessage,
  getAllMessages,
  editMessageById,
  deleteMessageById,
  getMessageById,
}

export default apis