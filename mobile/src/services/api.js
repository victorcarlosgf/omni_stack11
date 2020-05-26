import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.2.7:4421'
});

export default api;