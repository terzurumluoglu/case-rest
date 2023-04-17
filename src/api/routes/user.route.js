const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const albumRoute = require('../routes/album.route')

// Re-Route
router.use('/:id/album', albumRoute);

router.route('/').get(userController.getAllUsers);
router.route('/:id').get(userController.getUserById);

module.exports = router;
