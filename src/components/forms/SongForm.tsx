import { Autocomplete, TextField } from "@mui/material";
import { Song } from "../../types/types";
import { FormBaseContainer } from "./FormBaseContainer";
import SongRepository from "../../storage/song.repository";
import { forwardRef, useCallback, useEffect, useState } from "react";
import AlbumRepository from "../../storage/album.repository";
import { useSongStore } from "../stores/SongStore";
import { useSuccessNotification } from "../stores/SuccesNotificationStore";


interface SongFormProps {
  closeModal: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SongForm: React.FC<SongFormProps> = forwardRef(({ closeModal }, ref) => {
  const [title, setTitle] = useState<string>("");
  const [album, setAlbum] = useState<number>(0);
  const [albums, setAlbums] = useState<{ id: number, label: string }[]>([]);
  const [genre, setGenre] = useState<string>("");
  const [file, setFile] = useState<string>("");
  const [ isComplete, setIsComplete ] = useState<boolean>(false);
  const { setSongs } = useSongStore();
  const { openNotification } = useSuccessNotification();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const song: Partial<Song> = {
      title,
      album,
      genre,
      file
    };

    const songRepository = new SongRepository();
    songRepository.addSong(song);
    setSongs(songRepository.getSongs());
    openNotification("Song Succesfully added!");
    closeModal();
  };

  useEffect(() => {
    const albumRepository = new AlbumRepository();
    setAlbums(albumRepository.getAlbums().map(album => { return { id: album.id, label: album.title } }));
  }, []);

  useEffect(() => {
    setIsComplete(title !== '' && file !== '' && genre !== '' && album !== 0);
  }, [title, file, genre, album]);

  const albumFinder = useCallback((id: number) => {
    return albums.find(singleAlbum => singleAlbum.id === id)
  }, [albums])

  return (
    <FormBaseContainer
      title={"Create song"}
      buttonText={"Add song"}
      closeModal={closeModal}
      handleSubmit={handleSubmit}
      canSubmit={isComplete}
    >
      <TextField
        required
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />

      <Autocomplete
        fullWidth
        options={albums}
        renderInput={(params) => <TextField {...params} required label="album" />}
        value={albumFinder(album) ? { label: albumFinder(album)?.label || '', id: album } : null}
        onChange={(_, value) => setAlbum(value?.id || 0)}
        isOptionEqualToValue={(option, value) => option.id === value.id}
      />

      <TextField
        required
        label="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        fullWidth
      />

      <TextField
        required
        label="File"
        value={file}
        onChange={(e) => setFile(e.target.value)}
        fullWidth
      />
    </FormBaseContainer>
  )
});
