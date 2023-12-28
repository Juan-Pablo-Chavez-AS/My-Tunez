import './App.css'
import { Grid } from '@mui/material'
import { PlayerToolbar } from './components/playerToolbar/PlayerToolbar'
import { Sidebar } from './components/sidebar/Sidebar'
import { OptionsToolBar } from './components/optionsToolBar/OptionsToolBar'

const App = () => {
  return (
    <>
      <Grid container width={'100%'} height={'100vh'}>
        <Grid item xs={12} xl={12} height={'5%'}>
        {/* header toolbar */}
          <PlayerToolbar />
        </Grid>
        <Grid item xs={12} xl={12} height={'5%'}>
          {/* Nav options? WIP: ask */}
          <OptionsToolBar />
        </Grid>
        <Grid item xs={4} xl={4} height={'80%'} overflow={"auto"}>
          {/* side bar */}
          <Sidebar />
        </Grid>
        <Grid item xs={8} xl={8} height={'80%'} overflow={"auto"}>
          {/* song list */}
        </Grid>
      </Grid>
    </>
  )
}

export default App
