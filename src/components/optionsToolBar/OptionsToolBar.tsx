import { Button, Stack } from "@mui/material";

export const OptionsToolBar = () => {
  return <Stack direction={"row"} justifyContent={"space-between"}>
    <Stack direction={"row"} spacing={1}>
      <Button variant={"contained"}>Home</Button>
      <Button variant={"contained"}>Playlists</Button>
      <Button variant={"contained"}>Artists</Button>
    </Stack>
    <Stack direction={"row"} spacing={1}>
      <Button variant={"outlined"} color="secondary">Albums</Button>
      <Button variant={"outlined"} color="secondary">Songs</Button>
    </Stack>
    <Stack direction={"row"} spacing={1}>
      <Button variant={"outlined"} color="secondary">Genres</Button>
      <Button variant={"outlined"} color="secondary">Settings</Button>
    </Stack>
  </Stack>;
}
