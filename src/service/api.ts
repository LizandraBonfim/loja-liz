import axio from 'axios';

const api = axio.create({
    baseURL: 'https://loja-fake-api.herokuapp.com/'
    // baseURL: 'http://localhost:3333/'

});

export default api;