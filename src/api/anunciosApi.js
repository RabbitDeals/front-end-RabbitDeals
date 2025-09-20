
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export async function fetchAnuncios() {
  const resp = await api.get('/anuncios');
  return resp.data;
}

export default api;
