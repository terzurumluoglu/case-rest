const express = require('express');
const dotenv = require('dotenv');
const { basePath, environments } = require('../constants');
const { ERROR_MESSAGES } = require('../constants/messages');

const server = express();

let environmentPath = `${basePath}environment.env`;

if (process.env.ENVIRONMENT === environments.production) {
    environmentPath = `${basePath}environment.prod.env`;
}

dotenv.config({ path: environmentPath });

const PORT = process.env.PORT;

server.use(express.json());

server.listen(PORT, () => {
    const message = process.env.MESSAGE.split('{{PORT}}').join(PORT)
    console.log(message);
}).on('error', (error) => {
    console.log(error.code === 'EADDRINUSE' ? ERROR_MESSAGES[error.code] : error.code);
});

module.exports = { server };
