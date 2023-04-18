const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const albumController = require('../controllers/album.controller');

router.route('/:id/albums').get(albumController.getAllAlbumsByUserId);

router.route('/').get(userController.getAllUsers);
router.route('/:id').get(userController.getUserById);

module.exports = router;
