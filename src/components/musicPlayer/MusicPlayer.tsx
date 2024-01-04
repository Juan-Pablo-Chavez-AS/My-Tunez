import { Card, IconButton } from '@mui/material';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useCurrentPlaylistStore } from '../../stores/CurrentPlaylistStore';
import { createRef, useEffect } from 'react';
import { ArrowRightAlt, ShuffleSharp, StopCircleOutlined } from '@mui/icons-material';

export const MusicPlayer = () => {
  const {
    currentSong,
    isPlaying,
    setIsPlaying,
    setPreviousSong,
    setNextSong,
    clearCurrentSong,
    shuffle,
    toggleShuffleOn,
    toggleShuffleOff
  } = useCurrentPlaylistStore();
  const audioRef = createRef<AudioPlayer>();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.audio.current?.play();
    } else {
      audioRef.current?.audio.current?.pause();
    }
  }, [isPlaying])

  const previousSong = () => {
    if (audioRef.current && audioRef.current.audio.current && audioRef.current.audio.current.currentTime >= 5) {
      audioRef.current.audio.current.currentTime = 0;
    } else {
      setPreviousSong();
    }
  }

  const nextSong = () => {
    setNextSong();
  }

  return <Card elevation={10} sx={{ width: "40%", height: "100%", p: 0.5, display: "flex", justifyContent: "center", alignItems: "center" }} >
    <AudioPlayer
      src={currentSong?.file ?? ''}
      autoPlay
      autoPlayAfterSrcChange
      className='music-player'
      showSkipControls
      onPlay={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
      onClickPrevious={previousSong}
      onClickNext={nextSong}
      onEnded={nextSong}
      customAdditionalControls={[
        <IconButton onClick={clearCurrentSong}>
          <StopCircleOutlined />
        </IconButton>,
        <IconButton onClick={shuffle ? toggleShuffleOff : toggleShuffleOn}>
          {shuffle ?
            <ShuffleSharp />
            :
            <ArrowRightAlt />
          }
        </IconButton>
      ]}
      ref={audioRef}
    />
  </Card>
}
