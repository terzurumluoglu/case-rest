const albumService = require('../services/album.service');
const asyncHandler = require('../middleware/asyncHandler');

// @desc   Get All Albums
// @route  GET /album
// @access Public
const getAllAlbums = asyncHandler(async (req, res, next) => {

    const albums = await albumService.getAllAlbums();

    res.status(200).send({
        success: true,
        data: {
            albums
        }
    })
});

// @desc   Get Album by Id
// @route  GET /album/:id
// @access Public
const getAlbumById = asyncHandler(async (req, res, next) => {

    const { id } = req.params;

    const album = await albumService.getAlbumById(+id);

    res.status(200).send({
        success: true,
        data: {
            album
        }
    })
});

// @desc   Get Albums by UserId
// @route  GET /album/:userId
// @access Public
const getAlbumsByUserId = asyncHandler(async (req, res, next) => {

    const { userId } = req.params;

    const albums = await albumService.getAlbumsByUserId(+userId);

    res.status(200).send({
        success: true,
        data: {
            albums
        }
    })
});

module.exports = { getAllAlbums, getAlbumById, getAlbumsByUserId };
