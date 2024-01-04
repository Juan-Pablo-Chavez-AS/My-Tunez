import { FormBaseContainer } from "./FormBaseContainer";
import { MultipleStringInput } from "./MultipleStringInput";
import { Autocomplete, FormControl, Stack, TextField } from "@mui/material";
import { forwardRef, useCallback, useEffect, useState } from "react";
import AlbumRepository from "../../storage/album.repository";
import { Album } from "../../types/types";
import ArtistRepository from "../../storage/artist.repository";
import { useAlbumStore } from "../../stores/AlbumStore";
import { useSuccessNotification } from "../../stores/SuccessNotificationStore";

interface AlbumFormProps {
  closeModal: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const AlbumForm: React.FC<AlbumFormProps> = forwardRef(({ closeModal }, ref) => {
  const [title, setTitle] = useState<string>("");
  const [artist, setArtist] = useState<number>(0);
  const [image, setImage] = useState<string>("");
  const [genres, setGenres] = useState<string[]>([]);
  const [year, setYear] = useState<number | string>('');
  const [artists, setArtists] = useState<{ id: number, name: string }[]>([]);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const { setAlbums } = useAlbumStore();
  const { openNotification } = useSuccessNotification();

  useEffect(() => {
    const artistRepository = new ArtistRepository();
    setArtists(artistRepository.getArtists().map(artist => { return { id: artist.id, name: artist.name } }));
  }, []);

  useEffect(() => {
    setIsComplete(title !== '' && image !== '' && year !== '' && genres.length > 0 && artist !== 0);
  }, [title, image, year, genres, artist]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const album: Partial<Album> = {
      title: title,
      artist: artist,
      image: image,
      year: year as number,
      genres: genres
    };

    const albumRepository = new AlbumRepository();
    albumRepository.addAlbum(album);
    setAlbums(albumRepository.getAlbums());
    openNotification("Album Succesfully added!");
    closeModal();
  };

  const artistFinder = useCallback((id: number) => {
    return artists.find(singleArtist => singleArtist.id === id)
  }, [artists])

  return (
    <FormBaseContainer
      title={"Create album"}
      buttonText={"Add album"}
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

      <Stack component={FormControl} direction={"row"} width={"100%"} justifyContent={"center"} gap={1}>

        <Autocomplete
          fullWidth
          options={artists.map(artist => { return { label: artist.name, id: artist.id } })}
          renderInput={(params) => <TextField {...params} required label="Artist" />}
          value={artistFinder(artist) ? { label: artistFinder(artist)?.name || '', id: artist } : null}
          onChange={(_, value) => setArtist(value?.id || 0)}
          isOptionEqualToValue={(option, value) => option.id === value.id}
        />

        <TextField
          required
          label="Year"
          value={year}
          onChange={(e) => setYear(Number(e.target.value) || '')}
          fullWidth
          type="number"
          inputProps={{ min: 1 }}
        />

      </Stack>
      <MultipleStringInput
        strings={genres}
        setStringArray={setGenres}
        inputName='genre'
      />


      <TextField
        required
        label="Image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        fullWidth
      />
    </FormBaseContainer>
  );
});
