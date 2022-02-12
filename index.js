const api = require('./api/api');
const routes = require('./routes/routes');
const express = require('express');
const server = express();
const port = 9090 || process.env.port;

server.use(express.json());
server.listen(port, () => {
    console.log(`Running on port ${port}`)
});

server.get('/advice', routes);
server.get('/advice/:id', routes);


