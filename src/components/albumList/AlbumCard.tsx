import { SongList } from "../songList/SongList";
import React, { useEffect } from "react";
import { Album, Song } from "../../types/types";
import { Card, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import SongRepository from "../../storage/song.repository";


interface AlbumCardProps {
  album: Album;
}

export const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  const [songs, setSongs] = React.useState<Song[]>([]);

  useEffect(() => {
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
    <CardContent component={Paper} sx={{ width: "100%", paddingLeft: 1, height: 200}} elevation={10} >
      <Typography fontWeight={"bold"} fontSize={"1.3rem"}>{album.title}</Typography>
        <SongList songs={songs} />
    </CardContent>
  </Card>;
}
