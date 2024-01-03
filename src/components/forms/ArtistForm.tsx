import React, { forwardRef, useEffect, useState } from 'react';
import { Artist } from '../../types/types';
import ArtistRepository from '../../storage/artist.repository';
import { Stack, TextField } from '@mui/material';
import { MultipleStringInput } from './MultipleStringInput';
import { useArtistStore } from '../stores/ArtistStore';
import { FormBaseContainer } from './FormBaseContainer';
import { useSuccessNotification } from '../stores/SuccessNotificationStore';

interface ArtistFormProps {
  closeModal: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ArtistForm: React.FC<ArtistFormProps> = forwardRef(({ closeModal }, ref) => {
  const [name, setName] = useState<string>("");
  const [genres, setGenres] = useState<string[]>([]);
  const [members, setMembers] = useState<string[]>([]);
  const [image, setImage] = useState<string>("");
  const [webpage, setWebpage] = useState<string>("");
  const [ isComplete, setIsComplete ] = useState<boolean>(false);
  const { setArtists } = useArtistStore();
  const { openNotification } = useSuccessNotification();


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
    setArtists(artistRepository.getArtists());
    openNotification("Artist Succesfully added!");
    closeModal();
  };

  useEffect(() => {
    setIsComplete(name !== '' && image !== '' && webpage !== '' && genres.length > 0 && members.length > 0);
  }, [name, image, webpage, genres, members]);

  return (
    <FormBaseContainer
      title={"Create artist"}
      buttonText={"Add artist"}
      closeModal={closeModal}
      handleSubmit={handleSubmit}
      canSubmit={isComplete}
    >
      <TextField
        required
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />

      <MultipleStringInput
        strings={genres}
        setStringArray={setGenres}
        inputName='genre'
      />
      <MultipleStringInput
        strings={members}
        setStringArray={setMembers}
        inputName='member'
      />

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
    </FormBaseContainer>
  );
});
