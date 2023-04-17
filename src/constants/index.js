const basePath = './src/environments/';

const environments = {
    development: 'development',
    production: 'production'
};

const ERROR_MESSAGES = {
    EADDRINUSE: 'This port is used by another application!'
};

module.exports = { basePath, environments, ERROR_MESSAGES };
