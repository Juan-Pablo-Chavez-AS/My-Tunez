import React from "react";
import { Artist } from "../../types/types";
import { Card, Stack, Typography } from "@mui/material";

interface ArtistCardProps {
  artist: Artist | null;
  setArtist: (artist: Artist | null) => void
}

const defaultImage = "https://www.gravatar.com/avatar/03a08b6e51153c5256fa01aff88ae0e4.jpg?size=240&d=https%3A%2F%2Fwww.artstation.com%2Fassets%2Fdefault_avatar.jpg"

export const ArtistCard:React.FC<ArtistCardProps> = ({ artist, setArtist }) => {
  const imageSize = 40;
  return <Stack component={Card} direction={"row"} alignItems={"center"} p={1} spacing={0.5} onClick={() => setArtist(artist)}>
    <img src={artist?.image || defaultImage} alt={artist?.name} width={imageSize} height={imageSize}/>
    <Typography flexGrow={1} p={1} textAlign={"center"}>{artist?.name || "All artist"}</Typography>
  </Stack>;
}
