const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const mainRoute = require('../api/routes/main.route');
const errorHandler = require('../api/middleware/errorHandler');
const { basePath, environments, ERROR_MESSAGES } = require('../constants');

let environmentPath = `${basePath}environment.env`;

if (process.env.ENVIRONMENT === environments.production) {
    environmentPath = `${basePath}environment.prod.env`;
}

dotenv.config({ path: environmentPath });

// Enable CORS for all routes
app.use(cors());

// Mount the main route
app.use('/api', mainRoute);

// Error handler middleware
app.use(errorHandler);

module.exports = app;
