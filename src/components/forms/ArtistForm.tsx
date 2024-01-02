import React, { forwardRef, useState } from 'react';
import { Artist } from '../../types/types';
import ArtistRepository from '../../storage/artist.repository';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { MultipleStringInput } from './MultipleStringInput';
import { useArtistStore } from '../stores/ArtistStore';

interface ArtistFormProps {
  closeModal: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ArtistForm = forwardRef(({ closeModal }: ArtistFormProps, ref) => {
  const [name, setName] = useState<string>("");
  const [genres, setGenres] = useState<string[]>([]);
  const [members, setMembers] = useState<string[]>([]);
  const [image, setImage] = useState<string>("");
  const [webpage, setWebpage] = useState<string>("");
  const setArtist = useArtistStore(state => state.setArtists);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const artist: Partial<Artist> = {
      name,
      genres,
      members,
      image,
      webpage
    };

    const artistRepository = new ArtistRepository();
    artistRepository.addArtist(artist);
    setArtist(artistRepository.getArtists());
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        direction={"row"}
        width={"100%"}
        height={"100vh"}
      >
        <Stack
          direction={"row"}
          spacing={1}
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
          width={"40%"}
          bgcolor={"#323232"}
          p={2}
          borderRadius={2}
          flexWrap={"wrap"}
        >
          <Typography variant={"h3"} color={"white"}>Add artist</Typography>
          <TextField
            required
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />

          <MultipleStringInput strings={genres} setStringArray={setGenres} inputName='genre' />
          <MultipleStringInput strings={members} setStringArray={setMembers} inputName='member' />

          <Stack
            direction={"row"}
            width={"100%"}
            gap={2}
          >
            <TextField
              required
              label="Image link"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              sx={{ flexGrow: 1 }}
            />
            <TextField
              required
              label="Webpage link"
              value={webpage}
              onChange={(e) => setWebpage(e.target.value)}
              sx={{ flexGrow: 1 }}
            />
          </Stack>
          <Button
            type='submit'
            variant='contained'
            fullWidth
          >
            Add artist
          </Button>
        </Stack>
      </Stack>
    </form>
  );
});
