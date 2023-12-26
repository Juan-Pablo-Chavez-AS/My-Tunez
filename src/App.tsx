import './App.css'
import { Button, Grid, Stack } from '@mui/material'
import { PlayerToolbar } from './components/playerToolbar/PlayerToolbar'
import { Sidebar } from './components/sidebar/Sidebar'

const App = () => {
  return (
    <>
      <Grid container width={'100%'}>
        <Grid item xs={12} xl={12}>
        {/* header toolbar */}
          <PlayerToolbar />
        </Grid>
        <Grid item xs={12} xl={12}>
          {/* Nav options? WIP: ask */}
          <Stack direction={"row"} p={1} justifyContent={"space-between"}>
            <Button variant={"contained"}>Home</Button>
            <Button variant={"contained"}>Playlists</Button>
            <Button variant={"contained"}>Artists</Button>
            <Button variant={"contained"}>Albums</Button>
            <Button variant={"contained"}>Songs</Button>
            <Button variant={"contained"}>Genres</Button>
            <Button variant={"contained"}>Settings</Button>
          </Stack>
        </Grid>
        <Grid item xs={4} xl={4}>
          {/* side bar */}
          <Sidebar />
        </Grid>
        <Grid item xs={8} xl={8}>
          {/* song list */}
        </Grid>
      </Grid>
    </>
  )
}

export default App
