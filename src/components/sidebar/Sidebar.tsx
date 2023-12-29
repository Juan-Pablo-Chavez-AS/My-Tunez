import { ArtistCard } from "../artistCard/ArtistCard";
import { Paper, Stack, Typography } from "@mui/material"
import { Artist } from "../../types/types"
import React, { useEffect, useState } from "react";
import ArtistRepository from "../../storage/artist.repository";

interface SidebarProps {
  setArtist: (artist: Artist | null) => void
}

export const Sidebar: React.FC<SidebarProps> = ({ setArtist }) => {
  const [artists, setArtists] = useState<Artist[]>([])

  useEffect(() => {
    const repository = new ArtistRepository()
    setArtists(repository.getArtists())
  }, [])

  return (
    <Stack component={Paper} direction={"column"} p={1} spacing={3} overflow={"hidden"}>
      {
        artists.length === 0
        ? <Typography textAlign={"center"} fontSize={"2.5rem"}>No artists</Typography>
        : <ArtistCard setArtist={setArtist} artist={null}/>
      }
      {artists.map((artist: Artist, index: number) => {
        return <ArtistCard setArtist={setArtist} artist={artist} key={index}/>
      })}
    </Stack>
  )
}