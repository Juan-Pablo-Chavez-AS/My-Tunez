import React, { useEffect } from "react";
import { Album, Artist } from "../../types/types";
import { AlbumCard } from "./AlbumCard";
import { Paper, Stack, Typography } from "@mui/material";
import AlbumRepository from "../../storage/album.repository";

interface AlbumListProps {
  artist: Artist | null;
}

export const AlbumList: React.FC<AlbumListProps> = ({ artist }) => {
  const [albums, setAlbums] = React.useState<Album[]>([]);

  useEffect(() => {
    const repository = new AlbumRepository()
    setAlbums(repository.getAlbumsByArtist(artist?.id || 0))
  }, [artist]);

  return <Stack component={Paper} spacing={2} p={1.5} overflow={"hidden"}>
    {
      albums.length === 0 && <Typography textAlign={"center"} fontSize={"2.5rem"}>No albums</Typography>
    }
    {albums.map((album: Album, index: number) => {
      return <AlbumCard key={index} album={album} />
    })}
  </Stack>;
};