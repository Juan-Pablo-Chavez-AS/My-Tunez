import { Album } from "../types/types";

export default class AlbumRepository {
    private albumList: Album[]

    constructor() {
        const albums = localStorage.getItem('albums');
        if (albums === null) {
            this.albumList = [];
            localStorage.setItem('albums', JSON.stringify(this.albumList));
        } else {
            this.albumList = JSON.parse(albums);
        }
    }

    getAlbums(): Album[] {
        return this.albumList;
    }

    getAlbumsByArtist(artistId: number): Album[] {
        if (artistId === 0) return this.getAlbums();
        return this.albumList.filter((album) => album.artist === artistId);
    }

    getById(id: number): Album | undefined {
        return this.albumList.find((album) => album.id === id);
    }

    addAlbum(album: Album): void {
        this.albumList.push(album);
        localStorage.setItem('albums', JSON.stringify(this.albumList));
    }

    removeAlbum(id: number): void {
        this.albumList = this.albumList.filter((album) => album.id !== id);
        localStorage.setItem('albums', JSON.stringify(this.albumList));
    }

    updateAlbum(albumData: Album, id: number): void {
        this.albumList = this.albumList.map((album) => album.id === id ? albumData : album);
        localStorage.setItem('albums', JSON.stringify(this.albumList));
    }
}