import './App.css'
import { Grid } from '@mui/material'
import { PlayerToolbar } from './components/playerToolbar/PlayerToolbar'
import { Sidebar } from './components/sidebar/Sidebar'
import { OptionsToolBar } from './components/optionsToolBar/OptionsToolBar'
import { useState } from 'react'
import { Artist } from './types/types'
import { AlbumList } from './components/albumList/AlbumList'

const App = () => {
  const [currentArtist, setCurrentArtist] = useState<Artist | null>(null)

  return (
    <>
      <Grid container width={'100%'} height={'100vh'} spacing={0.5} overflow={"hidden"}>
        <Grid item xs={12} xl={12} height={'10%'}>
          <PlayerToolbar />
        </Grid>
        <Grid item xs={12} xl={12} height={'8%'}>
          <OptionsToolBar />
        </Grid>
        <Grid item xs={3} xl={3} height={'80%'} overflow={"auto"}>
          <Sidebar setArtist={setCurrentArtist} />
        </Grid>
        <Grid item xs={9} xl={9} height={'80%'} overflow={"auto"}>
          <AlbumList artist={currentArtist} />
        </Grid>
      </Grid>
    </>
  )
}

export default App
