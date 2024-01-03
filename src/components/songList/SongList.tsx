import React from "react";
import { Song } from "../../types/types";
import { Stack } from "@mui/material";
import { SongCard } from "./SongCard";

interface SongListProps {
  songs: Song[]
}

export const SongList: React.FC<SongListProps> = ({ songs }) => {

  return <Stack height={"90%"} boxShadow={24} overflow={"auto"} gap={1} p={1}>
    {
      songs.map((song) => {
        return (
          <SongCard song={song} key={song.id}/>
        );
      })
    }
    </Stack>;
}
