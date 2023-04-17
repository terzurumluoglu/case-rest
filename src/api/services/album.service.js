const albums = require('../../mock/album.json');
const photos = require('../../mock/photo.json');

const getAllAlbums = async () => albums;

const getAlbumById = async (id) => albums.find(album => album.id === id);

const getAlbumsByUserId = async (userId) => albums.find(album => album.userId === userId);

const getAllAlbumsWithPhotos = async (userId) => {
    return albums.filter(album => album.userId === userId).map(album => {
        album['photos'] = photos.filter(photo => photo.albumId === album.id);
        return album;
    })
}

module.exports = { getAllAlbums, getAlbumById, getAlbumsByUserId, getAllAlbumsWithPhotos };
