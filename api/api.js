const axios = require('axios');

const api = axios.create({
    baseURL: 'https://api.adviceslip.com/'
});

module.exports = api