import axio from 'axios';

// baseURL: 'https://loja-fake-api.herokuapp.com/'
// baseURL: 'http://localhost:3333/'


const api = axio.create({
    // baseURL: 'https://loja-fake-api.herokuapp.com/'
    baseURL: 'http://localhost:3333/'

});

export default api;