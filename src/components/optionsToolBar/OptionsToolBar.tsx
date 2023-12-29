import { Button, Stack } from "@mui/material";

export const OptionsToolBar = () => {
  return <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} bgcolor={"#242424"} height={"100%"}>
    <Stack direction={"row"} spacing={1} justifyContent={"center"}>
      <Button variant={"contained"}>Artists</Button>
      <Button variant={"contained"}>Album</Button>
      <Button variant={"contained"}>Song</Button>
    </Stack>
    <Stack direction={"row"} spacing={1} justifyContent={"center"}>
      <Button variant={"outlined"} color="secondary">Albums</Button>
      <Button variant={"outlined"} color="secondary">Songs</Button>
    </Stack>
    <Stack direction={"row"} spacing={1} justifyContent={"center"}>
      <Button variant={"outlined"} color="secondary">Genres</Button>
      <Button variant={"outlined"} color="secondary">Settings</Button>
    </Stack>
  </Stack>;
}
