import { Song } from "../types/types";

export default class SongRepository {
    private songList: Song[]

    constructor() {
        const songs = localStorage.getItem('songs');
        if (songs === null) {
            this.songList = [];
            localStorage.setItem('songs', JSON.stringify(this.songList));
        } else {
            this.songList = JSON.parse(songs);
        }
    }

    getSongs(): Song[] {
        return this.songList;
    }

    getByAlbumId(id: number): Song[] {
        return this.songList.filter((song) => song.album === id);
    }

    addSong(song: Partial<Song>): void {
        song.id = this.songList.reduce((currentMax, song) => {
            return Math.max(currentMax, song.id);
        }, 0) + 1;
        this.songList.push(song as Song);
        localStorage.setItem('songs', JSON.stringify(this.songList));
    }

}
