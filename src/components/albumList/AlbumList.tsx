import React, { useEffect } from "react";
import { Album, Artist } from "../../types/types";
// import AlbumRepository from "../../storage/album.repository";
import { AlbumCard } from "./AlbumCard";
import { Stack } from "@mui/material";
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

  return <Stack spacing={2} m={1}>
    {albums.map((album: Album, index: number) => {
      return <AlbumCard key={index} album={album} />
    })}
  </Stack>;
};