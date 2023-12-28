import React from "react";
import { Album } from "../../types/types";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";


interface AlbumCardProps {
  album: Album;
}

export const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  return <Card sx={{ display: "flex"}}>
    <CardMedia
      component="img"
      sx={{ width: 200 }}
      image={album.image}
      alt={album.title}
    />
    <CardContent sx={{ flex: "1" }}>
      <Typography>{album.title}</Typography>
    </CardContent>
  </Card>;
}
