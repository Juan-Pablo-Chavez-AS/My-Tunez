import React from "react";
import { Album } from "../../types/types";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";


interface AlbumCardProps {
  album: Album;
}

export const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  return <Card>
    <CardMedia
      component="img"
      sx={{ width: 200 }}
      image={album.image}
      alt={album.title}
    />
    <CardContent>
      <Typography>{album.title}</Typography>
    </CardContent>
  </Card>;
}
