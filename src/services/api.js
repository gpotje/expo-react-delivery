import axios from 'axios';

const api = axios.create({
     baseURL: 'https://delivery-demo-production.up.railway.app/api/v1'
});

export default api;