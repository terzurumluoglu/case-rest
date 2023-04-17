const photoService = require('../services/photo.service');
const asyncHandler = require('../middleware/asyncHandler');

// @desc   Get All Photos
// @route  GET /photo
// @access Public
const getAllPhotos = asyncHandler(async (req, res, next) => {

    const photos = photoService.getAllPhotos();

    res.status(200).send({
        success: true,
        data: {
            photos
        }
    })
});

// @desc   Get Photo by Id
// @route  GET /photo/:id
// @access Public
const getPhotoById = asyncHandler(async (req, res, next) => {

    const { id } = req.params;

    const photo = photoService.getPhotoById(+id);

    res.status(200).send({
        success: true,
        data: {
            photo
        }
    })
});

// @desc   Get Photos by albumId
// @route  GET /photo/:albumId
// @access Public
const getPhotoByAlbumId = asyncHandler(async (req, res, next) => {

    const { albumId } = req.params;

    const photos = photoService.getPhotoByAlbumId(+albumId);

    res.status(200).send({
        success: true,
        data: {
            photos
        }
    })
});

module.exports = { getAllPhotos, getPhotoById, getPhotoByAlbumId };
