import axios from 'axios';

const api = axios.create({
    baseURL: 'https://delivery-demo-production-2ac9.up.railway.app/api/v1'
     // baseURL: 'http://192.168.1.5:8080/api/v1',
    
});



export default api;