import { Card, CardContent, CardMedia, Paper, Stack, Typography } from "@mui/material";
import { useCurrentPlaylistStore } from "../../stores/CurrentPlaylistStore";
import { useEffect, useState } from "react";
import AlbumRepository from "../../storage/album.repository";
import { Album } from "../../types/types";
import ArtistRepository from "../../storage/artist.repository";


export const CurrentSongCard = () => {
  const { currentSong } = useCurrentPlaylistStore();
  const [album, setCover] = useState<Album | undefined>(undefined);
  const [artist, setArtist] = useState<string>("");

  useEffect(() => {
    if (currentSong) {
      const albumRepository = new AlbumRepository();
      const album = albumRepository.getById(currentSong.album);
      setCover(album);
      if (album) {
        const artistRepository = new ArtistRepository();
        const artist = artistRepository.getById(album.artist)?.name;
        setArtist(artist || "");
      }
    }
  }, [currentSong]);

  return (<>
    {
      currentSong ?
      <Stack component={Card} direction={"row"} height={"100%"} p={1} width={"20%"} >
        <CardMedia
          component="img"
          sx={{ width: 100 }}
          image={album?.image}
          alt={currentSong?.title}
        />
        <CardContent component={Paper} sx={{ width: "100%", paddingLeft: 1, height: "100%" }} elevation={10} >
          <Typography fontWeight={"bold"} fontSize={"1.2rem"}>{currentSong.title}</Typography>
          <Typography fontSize={"1.1rem"}>{artist}</Typography>
        </CardContent>
      </Stack>
      :
      <Typography width={"20%"} textAlign={"center"}>
        No song selected
      </Typography>
    }
  </>
  )
}
