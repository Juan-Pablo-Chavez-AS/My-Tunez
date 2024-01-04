import { SongList } from "../songList/SongList";
import React, { useEffect, useState } from "react";
import { Album, Song } from "../../types/types";
import { Card, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import SongRepository from "../../storage/song.repository";
import { useSongStore } from "../../stores/SongStore";


interface AlbumCardProps {
  album: Album;
}

export const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  const { songs, setSongs } = useSongStore();
  const [albumSongs, setAlbumSongs] = useState<Song[]>([]);

  useEffect(() => {
    const songRepository = new SongRepository();
    setSongs(songRepository.getSongs());
  }, []);

  useEffect(() => {
    setAlbumSongs(songs.filter(song => song.album === album.id));
  }, [songs]);

  return <Card>
    <CardMedia
      component="img"
      sx={{ width: 200 }}
      image={album.image}
      alt={album.title}
    />
    <CardContent component={Paper} sx={{ width: "100%", paddingLeft: 1, height: 200 }} elevation={10} >
      <Typography fontWeight={"bold"} fontSize={"1.3rem"}>{album.title}</Typography>
      <SongList songs={albumSongs} />
    </CardContent>
  </Card>;
}
