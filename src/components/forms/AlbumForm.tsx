import { FormBaseContainer } from "./FormBaseContainer";
import { MultipleStringInput } from "./MultipleStringInput";
import { Autocomplete, FormControl, Stack, TextField } from "@mui/material";
import { forwardRef, useCallback, useEffect, useState } from "react";
import AlbumRepository from "../../storage/album.repository";
import { Album } from "../../types/types";
import ArtistRepository from "../../storage/artist.repository";

interface AlbumFormProps {
  closeModal: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const AlbumForm: React.FC<AlbumFormProps> = forwardRef(({ closeModal }, ref) => {
  const [title, setTitle] = useState<string>("");
  const [artist, setArtist] = useState<number>(0);
  const [image, setImage] = useState<string>("");
  const [genres, setGenres] = useState<string[]>([]);
  const [webpage, setWebpage] = useState<string>("");
  const [year, setYear] = useState<number | string>('');
  const [artists, setArtists] = useState<{ id: number, name: string }[]>([]);

  useEffect(() => {
    const artistRepository = new ArtistRepository();
    setArtists(artistRepository.getArtists().map(artist => { return { id: artist.id, name: artist.name } }));
  }, []);

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
          options={artists.map(artist => {return { label: artist.name, id: artist.id }})}
          renderInput={(params) => <TextField {...params} required label="Artist" />}
          value={ artistFinder(artist) ? { label: artistFinder(artist)?.name || '', id: artist } : null}
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
      <TextField
        required
        label="Webpage"
        value={webpage}
        onChange={(e) => setWebpage(e.target.value)}
        fullWidth
      />
    </FormBaseContainer>
  );
});