import { Card, IconButton, Typography } from '@mui/material';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useCurrentPlaylistStore } from '../../stores/CurrentPlaylistStore';
import { createRef, useEffect } from 'react';
import { ShuffleSharp, StopCircleOutlined } from '@mui/icons-material';

export const MusicPlayer = () => {
  const { currentSong, isPlaying, setIsPlaying } = useCurrentPlaylistStore();
  const audioRef = createRef<AudioPlayer>();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.audio.current?.play();
    } else {
      audioRef.current?.audio.current?.pause();
    }
  }, [isPlaying])

  return <Card elevation={10} sx={{ width: "50%", height: "100%", p: 0.5, display: "flex", justifyContent: "center", alignItems: "center"}} >
    {
      currentSong ?
      <AudioPlayer
      src={currentSong.file}
      autoPlay
      autoPlayAfterSrcChange
      className='music-player'
      showSkipControls
      onPlay={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
      customAdditionalControls={[
        <IconButton>
          <StopCircleOutlined/>
        </IconButton>,
        <IconButton>
          <ShuffleSharp/>
        </IconButton>
      ]}
      ref={audioRef}
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