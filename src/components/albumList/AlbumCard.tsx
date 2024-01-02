import React from "react";
import { Album, Song } from "../../types/types";
import { Card, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import SongRepository from "../../storage/song.repository";


interface AlbumCardProps {
  album: Album;
}

export const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  const [songs, setSongs] = React.useState<Song[]>([]);

  React.useEffect(() => {
    const songRepository = new SongRepository();
    setSongs(songRepository.getByAlbumId(album.id));
  }, []);

  return <Card>
    <CardMedia
      component="img"
      sx={{ width: 200 }}
      image={album.image}
      alt={album.title}
    />
    <CardContent component={Paper} sx={{ width: "100%", marginLeft: 5}} elevation={10}>
      <Typography>{album.title}</Typography>
      {songs.map((song, index) => {
        return <Typography key={index}>{song.title}</Typography>
        })
      }
    </CardContent>
  </Card>;
}
