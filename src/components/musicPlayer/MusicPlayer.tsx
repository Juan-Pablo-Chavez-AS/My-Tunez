import { Card, Typography } from '@mui/material';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useCurrentPlaylistStore } from '../../stores/CurrentPlaylistStore';

export const MusicPlayer = () => {
  const { currentSong } = useCurrentPlaylistStore();

  return <Card elevation={10} sx={{ width: "50%", height: "100%", p: 0.5, display: "flex", justifyContent: "center", alignItems: "center"}} >
    {
      currentSong ?
      <AudioPlayer
      src={currentSong.file}
      autoPlayAfterSrcChange
      className='music-player'
      showSkipControls
      onPlay={() => console.log("onPlay")}
      onError={(e) => console.log(e)}
      />
      :
      <Typography textAlign={"center"} fontSize={32}>
        No song selected
      </Typography>
    }

    {/* <audio
      src="https://file-examples.com/storage/fe4485c9e865956069e3369/2017/11/file_example_MP3_1MG.mp3"
      autoPlay
      controls
      style={{
        backgroundColor: "#242424",
        color: "white",
        borderColor: "red",
        borderWidth: "10px",
        flexGrow: 1,
        maxHeight: "100%",
      }}
    /> */}
  </Card>
}