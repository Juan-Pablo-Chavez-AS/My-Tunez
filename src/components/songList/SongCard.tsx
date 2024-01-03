import { PauseCircleOutline, PlayCircleFilledOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Song } from "../../types/types";
import { useState } from "react";
import { useCurrentPlaylistStore } from "../../stores/CurrentPlaylistStore";

interface SongCardProps {
  song: Song;
}

export const SongCard = ({ song }: SongCardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { currentSong, setCurrentSong, isPlaying } = useCurrentPlaylistStore();

  return (
    <Box
      key={song.id}
      border={1}
      borderColor={"#555555"}
      borderRadius={1}
      px={1}
      display={"flex"}
      alignItems={"center"}
      gap={1}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        "&:hover": {
          backgroundColor: "#555555",
          cursor: "pointer",
        },
      }}
      onClick={() => setCurrentSong(song)}
    >
      {currentSong?.id === song.id && isPlaying && (
        <PauseCircleOutline color="success" fontSize={"small"} />
      )}
      {isHovered && (currentSong?.id !== song.id || !isPlaying)  && (
        <PlayCircleFilledOutlined color="success" fontSize={"small"} />
      )}
      <Typography display={"inline"}>{song.title}</Typography>
    </Box>
  );
}
