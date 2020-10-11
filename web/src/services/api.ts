import axios from 'axios';

// fazer a conexão entre front e back
const api = axios.create({
    baseURL: 'http://localhost:3333',
});

export default api;