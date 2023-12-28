import { ArtistCard } from "../artistCard/ArtistCard";
import { Stack } from "@mui/material"
import { Artist } from "../../types/types"
import React, { useEffect, useState } from "react";
import ArtistRepository from "../../storage/artist.repository";

interface SidebarProps {
  setArtist: (artist: Artist) => void
}

export const Sidebar: React.FC<SidebarProps> = ({ setArtist }) => {
  const [artists, setArtists] = useState<Artist[]>([])

  useEffect(() => {
    const repository = new ArtistRepository()
    setArtists(repository.getArtists())
  }, [])

  return (
    <Stack direction={"column"} p={1} spacing={2}>
      {artists.map((artist: Artist, index: number) => {
        return <ArtistCard setArtist={setArtist} artist={artist} key={index}/>
      })}
    </Stack>
  )
}