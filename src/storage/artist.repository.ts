import { Artist } from "../types/types";

export default class ArtistRepository {
  private artistList: Artist[]

  constructor() {
    const artists = localStorage.getItem('artists');
    if (artists === null) {
      this.artistList = [];
      localStorage.setItem('artists', JSON.stringify(this.artistList));
    } else {
      this.artistList = JSON.parse(artists);
    }
  }

  getArtists(): Artist[] {
    return [... this.artistList];
  }

  getById(id: number): Artist | undefined {
    return this.artistList.find((artist) => artist.id === id);
  }

  addArtist(artist: Partial<Artist>): void {
    artist.id = this.artistList.reduce((currentMax, artist) => {
      return Math.max(currentMax || 0, artist.id);
    }, 0) + 1;
    this.artistList.push(artist as Artist);
    localStorage.setItem('artists', JSON.stringify(this.artistList));
  }

  removeArtist(id: number): void {
    this.artistList = this.artistList.filter((artist) => artist.id !== id);
    localStorage.setItem('artists', JSON.stringify(this.artistList));
  }

  updateArtist(artistData: Artist, id: number): void {
    this.artistList = this.artistList.map((artist) => artist.id === id ? artistData : artist);
    localStorage.setItem('artists', JSON.stringify(this.artistList));
  }
}
