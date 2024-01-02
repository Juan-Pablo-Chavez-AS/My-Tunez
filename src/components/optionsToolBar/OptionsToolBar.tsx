import { CreateNewFolder, LibraryAdd, PersonAdd } from "@mui/icons-material";
import { Button, Grid, IconButton, Modal, Stack } from "@mui/material";
import { ReactElement, useState } from "react";
import { ArtistForm } from "../forms/ArtistForm";
import { AlbumForm } from "../forms/AlbumForm";
import { SongForm } from "../forms/SongForm";

export const OptionsToolBar = () => {
  const [open, setOpen] = useState(false);
  const openForm = (form: ReactElement) => {
    setCurrentForm(form);
    setOpen(true);
  };
  const closeForm = () => setOpen(false);
  const [currentForm, setCurrentForm] = useState<ReactElement>(<></>);

  return <>
    <Grid container alignItems={"center"} bgcolor={"#242424"} height={"100%"}>
      <Grid item component={Stack} xl={3} gap={1} justifyContent={"end"}>
        <IconButton
          onClick={() => {
            openForm(<ArtistForm closeModal={closeForm} />);
          }}
        >
          <PersonAdd color="secondary" />
        </IconButton>
        <IconButton
          onClick={() => {
            openForm(<AlbumForm closeModal={closeForm} />);
          }}
        >
          <CreateNewFolder color="secondary" />
        </IconButton>
        <IconButton
          onClick={() => {
            openForm(<SongForm closeModal={closeForm} />);
          }}
        >
          <LibraryAdd color="secondary" />
        </IconButton>
      </Grid>
      <Grid item component={Stack} xl={5} gap={1} justifyContent={"center"}>
        <Button variant={"contained"} color="primary">Albums</Button>
        <Button variant={"contained"} color="secondary">Songs</Button>
      </Grid>
      <Grid item component={Stack} xl={4} gap={1} >
        <Button variant={"outlined"} color="secondary">Genres</Button>
        <Button variant={"outlined"} color="secondary">Settings</Button>
      </Grid>
    </Grid>
    <Modal
      open={open}
      onClose={closeForm}
    >
        { currentForm }
    </Modal>
  </>
}
