import './App.css'
import { Grid } from '@mui/material'
import { PlayerToolbar } from './components/playerToolbar/PlayerToolbar'
import { Sidebar } from './components/sidebar/Sidebar'
import { OptionsToolBar } from './components/optionsToolBar/OptionsToolBar'

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
          <OptionsToolBar />
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
