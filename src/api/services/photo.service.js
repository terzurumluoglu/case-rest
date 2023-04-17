const photos = require('../../mock/photo.json');

const getAllPhotos = async () => photos;

const getPhotoById = async (id) => photos.find(photo => photo.id === id);

const getPhotoByAlbumId = async (albumId) => photo.filter(photo => photo.albumId === albumId);

module.exports = { getAllPhotos, getPhotoById, getPhotoByAlbumId };
