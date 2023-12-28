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

    getById(id: number): Song | undefined {
        return this.songList.find((song) => song.id === id);
    }

    addSong(song: Song): void {
        this.songList.push(song);
        localStorage.setItem('songs', JSON.stringify(this.songList));
    }

    removeSong(id: number): void {
        this.songList = this.songList.filter((song) => song.id !== id);
        localStorage.setItem('songs', JSON.stringify(this.songList));
    }

    updateSong(songData: Song, id: number): void {
        this.songList = this.songList.map((song) => song.id === id ? songData : song);
        localStorage.setItem('songs', JSON.stringify(this.songList));
    }
}
