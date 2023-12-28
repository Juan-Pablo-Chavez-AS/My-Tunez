import { Stack, Typography } from "@mui/material"

export const PlayerToolbar = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent={"space-between"} alignItems={'start'} height={'100%'}>
      <Typography border={1} borderColor={"red"} flexGrow={1} textAlign={"center"}>Player controls</Typography>
      <Typography border={1} borderColor={"red"} flexGrow={1} textAlign={"center"}>Player Info Settings</Typography>
      <Typography border={1} borderColor={"red"} flexGrow={1} textAlign={"center"}>Search bar</Typography>
    </Stack>
  )
}