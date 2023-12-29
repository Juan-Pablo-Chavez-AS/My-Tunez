import { Stack, Typography } from "@mui/material"

export const PlayerToolbar = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent={"space-between"} alignItems={'center'} height={'100%'} bgcolor={"#242424"}>
      <Typography  borderColor={"black"} flexGrow={1} textAlign={"center"}>Player controls</Typography>
      <Typography  borderColor={"black"} flexGrow={1} textAlign={"center"}>Player Info Settings</Typography>
      <Typography  borderColor={"black"} flexGrow={1} textAlign={"center"}>Search bar</Typography>
    </Stack>
  )
}