import axio from 'axios';


const api = axio.create({
    baseURL: 'https://loja-fake-api.herokuapp.com/'
});

export default api;