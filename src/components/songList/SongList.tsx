import React from "react";
import { Song } from "../../types/types";
import { Box, Stack, Typography } from "@mui/material";

interface SongListProps {
  songs: Song[];
}

export const SongList: React.FC<SongListProps> = ({
  songs
}) => {
  return <Stack height={"90%"} boxShadow={24} overflow={"auto"} gap={1} p={1}>
    {
      songs.map((song) => {
        return (
          <Box
            key={song.id}
            border={1}
            borderColor={"#555555"}
            borderRadius={1}
            px={1}
            sx={{
              "&:hover": {
                backgroundColor: "#555555",
                cursor: "pointer"
              }
            }}
          >
            <Typography>{song.title}</Typography>
          </Box>
        );
      })
    }
    </Stack>;
}
