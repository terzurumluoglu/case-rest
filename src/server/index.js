const express = require('express');

const server = express();

const PORT = 8080;

server.use(express.json());

server.listen(PORT, () => {
    console.log(`The server is running on: ${PORT}`);
});

module.exports = { server };