const express = require('express');
const router = express.Router({ mergeParams: true });
const { getAllAlbums } = require('../controllers/album.controller');

router.route('/').get(getAllAlbums);

module.exports = router;
