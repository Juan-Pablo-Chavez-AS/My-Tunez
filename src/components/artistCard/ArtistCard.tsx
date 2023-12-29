import React from "react";
import { Artist } from "../../types/types";
import { Stack, Typography } from "@mui/material";

interface ArtistCardProps {
  artist: Artist | null;
  setArtist: (artist: Artist | null) => void
}

const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"

export const ArtistCard:React.FC<ArtistCardProps> = ({ artist, setArtist }) => {
  const imageSize = 40;
  return <Stack border={1} borderColor={"red"} direction={"row"} alignItems={"center"} p={1} spacing={0.5} onClick={() => setArtist(artist)}>
    <img src={artist?.image || defaultImage} alt={artist?.name} width={imageSize} height={imageSize}/>
    <Typography flexGrow={1} p={1} textAlign={"center"}>{artist?.name || "All artist"}</Typography>
  </Stack>;
}
