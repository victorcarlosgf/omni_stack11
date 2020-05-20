import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4421'
})

export default api;