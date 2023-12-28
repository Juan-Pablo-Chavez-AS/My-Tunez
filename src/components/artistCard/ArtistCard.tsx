import React from "react";
import { Artist } from "../../types/types";
import { Stack, Typography } from "@mui/material";

interface ArtistCardProps {
  artist: Artist;
}

export const ArtistCard:React.FC<ArtistCardProps> = ({ artist }) => {
  const imageSize = 40;
  return <Stack border={1} borderColor={"red"} direction={"row"} alignItems={"center"} p={1} spacing={0.5}>
    <img src={artist.image} alt={artist.name} width={imageSize} height={imageSize}/>
    <Typography flexGrow={1} p={1} textAlign={"center"}>{artist.name}</Typography>
  </Stack>;
}
