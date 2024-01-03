import { Stack, Typography } from "@mui/material"
import { MusicPlayer } from "../musicPlayer/MusicPlayer"

export const PlayerToolbar = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent={"space-around"} alignItems={'center'} height={'100%'} bgcolor={"#242424"}>
      <Typography  borderColor={"black"}textAlign={"center"}>Player Info Settings</Typography>
      <MusicPlayer />
      <Typography  borderColor={"black"} textAlign={"center"}>Search bar</Typography>
    </Stack>
  )
}