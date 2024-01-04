import { Stack, Typography } from "@mui/material"
import { MusicPlayer } from "../musicPlayer/MusicPlayer"
import { CurrentSongCard } from "../musicPlayer/CurrentSongCard"

export const PlayerToolbar = () => {
  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent={"space-around"}
      alignItems={'center'}
      height={'100%'}
      bgcolor={"#242424"}
      sx={{
        "& *": {
          flexGrow: 1
        }
      }}
    >
      <CurrentSongCard />
      <MusicPlayer />
      <Typography width={"20%"} display={"block"} borderColor={"black"} textAlign={"center"}></Typography>
    </Stack>
  )
}