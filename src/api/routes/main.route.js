const express = require('express');
const router = express.Router();
const userRoute = require('./user.route');
const albumRoute = require('./album.route');

// Re-Route
router.use('/users', userRoute);
router.use('/albums', albumRoute);

module.exports = router;
