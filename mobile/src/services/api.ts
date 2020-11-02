import axios from 'axios';

//IP no expo, trocando o exp->http e a porta do exp pela porta do server
const api = axios.create({
    baseURL: 'http://192.168.15.5:3333' 
});

export default api;