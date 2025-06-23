import React, { useRef, useState, useEffect } from 'react';
import { Box, IconButton, Slider, Typography } from '@mui/material';
import { PlayArrow, Pause, VolumeUp, SkipNext, SkipPrevious } from '@mui/icons-material';

const SongPLayer = () => {
  const songs = [
    { title: 'Butterfly', url: 'http://localhost:9000/song/a.mp3' },
    { title: 'Let Me Love You', url: 'http://localhost:9000/song/b.mp3' },
    { title: 'Shape Of You', url: 'http://localhost:9000/song/c.mp3' },
    { title: 'Love Me Like You', url: 'http://localhost:9000/song/d.mp3' },
    { title: 'Kol Mere', url: 'http://localhost:9000/song/e.mp3' },
  ];

  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleVolumeChange = (e, newValue) => {
    setVolume(newValue);
    audioRef.current.volume = newValue / 100;
  };

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    setPlaying(false);
  };

  const handlePrev = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setPlaying(false);
  };

  const handleSelectSong = (index) => {
    setCurrentSongIndex(index);
    setPlaying(false);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (playing) {
        audioRef.current.play();
      }
    }
  }, [currentSongIndex]);

  console.log('Songs:', songs);


  return (
    <Box
      sx={{
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 3,
        p: 3,
        color: '#fff',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
        width: '100%',
        maxWidth: 360,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
        Top Charts
      </Typography>

      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        {songs[currentSongIndex].title}
      </Typography>

      <audio ref={audioRef} preload="auto">
        <source src={songs[currentSongIndex].url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, width: '100vw', px:2}}>
        <IconButton onClick={handlePrev} sx={{ color: 'white' }}><SkipPrevious /></IconButton>
        <IconButton onClick={togglePlay} sx={{ color: 'white' }}>
          {playing ? <Pause /> : <PlayArrow />}
        </IconButton>
        <IconButton onClick={handleNext} sx={{ color: 'white' }}><SkipNext /></IconButton>
        <VolumeUp sx={{ ml: 1 }} />
        <Slider
          value={volume}
          onChange={handleVolumeChange}
          sx={{
            width: 100,
            color: '#2196f3',
            '& .MuiSlider-thumb': {
              boxShadow: '0 0 0 4px rgba(33,150,243,0.3)',
            },
          }}
        />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {songs.filter(song => song && song.title)
        .map((song, index) => (
          <Box
            key={index}
            onClick={() => handleSelectSong(index)}
            sx={{
              px: 2,
              py: 1,
              borderRadius: 2,
              cursor: 'pointer',
              backgroundColor: index === currentSongIndex ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
              color: index === currentSongIndex ? '#000' : '#fff',
              fontWeight: index === currentSongIndex ? 'bold' : 'normal',
              transition: 'background-color 0.2s',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            {song.title}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SongPLayer;
