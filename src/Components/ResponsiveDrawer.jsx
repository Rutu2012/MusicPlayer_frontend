import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AppBar from '@mui/material/AppBar';

import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Slider } from '@mui/material';

import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import AlbumIcon from '@mui/icons-material/Album';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import ExploreIcon from '@mui/icons-material/Explore';
import PersonIcon from '@mui/icons-material/Person';
import RadioIcon from '@mui/icons-material/Radio';
import HistoryIcon from '@mui/icons-material/History';
import StarIcon from '@mui/icons-material/Star';
import FolderIcon from '@mui/icons-material/Folder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BrushIcon from '@mui/icons-material/Brush';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ResponsiveAppBar from './ResponsiveAppBar';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import SongPLayer from './SongPLayer';


const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [libraryOpen, setLibraryOpen] = React.useState(false);
  const [playlistOpen, setPlaylistOpen] = React.useState(false);
  const [topCharts, setTopCharts] = useState([]);

useEffect(() => {
  const fetchSongs = async () => {
    try {
      const res = await fetch('http://localhost:9000/song');
      const data = await res.json();
      setTopCharts(data);
    } catch (err) {
      console.error('Error fetching songs:', err);
    }
  };

  fetchSongs();
}, []);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLibraryClick = () => {
    setLibraryOpen((prev) => !prev);
  };

  const handlePlaylistClick = () => {
    setPlaylistOpen((prev) => !prev);
  };

  const drawer = (
    <div>
      <Toolbar>
        <GraphicEqIcon sx={{ color: '#fff', mr: 1 }} />
        <Typography variant="h6" 
        noWrap sx={{ fontFamily: '"Pacifico", "cursive", "Comic Sans MS", "Arial", sans-serif',
                     fontWeight: 700,
                     letterSpacing: 2,
                     color: '#43cea2',
                     textShadow: '2px 2px 8px rgba(24,90,157,0.18)',
                     mr: 2,
                     userSelect: 'none',
                     display: { xs: 'none', md: 'block' },
                     fontSize: { xs: '1.5rem', md: '2.2rem' } }}>
          Rhythm
        </Typography>
      </Toolbar>
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)' }} />
      <List>
        {/* Menu with expandable sub-items */}
        <ListItem disablePadding>
          <ListItemButton sx={{ color: '#fff' }} onClick={handleMenuClick}>
            <ListItemIcon sx={{ color: '#fff' }}>
              <LibraryMusicIcon />
            </ListItemIcon>
            <ListItemText primary="Menu" sx={{ color: '#fff' }} />
            {menuOpen ? <ExpandLess sx={{ color: '#fff' }} /> : <ExpandMore sx={{ color: '#fff' }} />}
          </ListItemButton>
        </ListItem>
        <Collapse in={menuOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4, color: '#fff' }}>
              <ListItemIcon sx={{ color: '#fff' }}>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText primary="Explore" sx={{ color: '#fff' }} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4, color: '#fff' }}>
              <ListItemIcon sx={{ color: '#fff' }}>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Artists" sx={{ color: '#fff' }} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4, color: '#fff' }}>
              <ListItemIcon sx={{ color: '#fff' }}>
                <RadioIcon />
              </ListItemIcon>
              <ListItemText primary="Radio" sx={{ color: '#fff' }} />
            </ListItemButton>
          </List>
        </Collapse>
        {/* Library with expandable sub-items */}
        <ListItem disablePadding>
          <ListItemButton sx={{ color: '#fff' }} onClick={handleLibraryClick}>
            <ListItemIcon sx={{ color: '#fff' }}>
              <PlaylistPlayIcon />
            </ListItemIcon>
            <ListItemText primary="Library" sx={{ color: '#fff' }} />
            {libraryOpen ? <ExpandLess sx={{ color: '#fff' }} /> : <ExpandMore sx={{ color: '#fff' }} />}
          </ListItemButton>
        </ListItem>
        <Collapse in={libraryOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4, color: '#fff' }}>
              <ListItemIcon sx={{ color: '#fff' }}>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="Recent" sx={{ color: '#fff' }} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4, color: '#fff' }}>
              <ListItemIcon sx={{ color: '#fff' }}>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Favourites" sx={{ color: '#fff' }} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4, color: '#fff' }}>
              <ListItemIcon sx={{ color: '#fff' }}>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Local" sx={{ color: '#fff' }} />
            </ListItemButton>
          </List>
        </Collapse>
        {/* Playlist with expandable sub-items */}
        <ListItem disablePadding>
          <ListItemButton sx={{ color: '#fff' }} onClick={handlePlaylistClick}>
            <ListItemIcon sx={{ color: '#fff' }}>
              <QueueMusicIcon />
            </ListItemIcon>
            <ListItemText primary="Playlist" sx={{ color: '#fff' }} />
            {playlistOpen ? <ExpandLess sx={{ color: '#fff' }} /> : <ExpandMore sx={{ color: '#fff' }} />}
          </ListItemButton>
        </ListItem>
        <Collapse in={playlistOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4, color: '#fff' }}>
              <ListItemIcon sx={{ color: '#fff' }}>
                <AddCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Create New" sx={{ color: '#fff' }} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4, color: '#fff' }}>
              <ListItemIcon sx={{ color: '#fff' }}>
                <BrushIcon />
              </ListItemIcon>
              <ListItemText primary="Design Flow" sx={{ color: '#fff' }} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4, color: '#fff' }}>
              <ListItemIcon sx={{ color: '#fff' }}>
                <EmojiEmotionsIcon />
              </ListItemIcon>
              <ListItemText primary="Best of 90's" sx={{ color: '#fff' }} />
            </ListItemButton>
          </List>
        </Collapse>
        {/* Other main items */}
        <ListItem disablePadding>
          <ListItemButton sx={{ color: '#fff' }}>
            <ListItemIcon sx={{ color: '#fff' }}>
              <AlbumIcon />
            </ListItemIcon>
            <ListItemText primary="Albums" sx={{ color: '#fff' }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ color: '#fff' }}>
            <ListItemIcon sx={{ color: '#fff' }}>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Favorites" sx={{ color: '#fff' }} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* Sidebar */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="music player sidebar"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              bgcolor: '#424242',
              color: '#fff',
            },
          }}
          slotProps={{
            root: {
              keepMounted: true,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              bgcolor: '#424242',
              color: '#fff',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* Main content area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minWidth: 0,
          width: '82.8vw',
          bgcolor: '#f5f5f5',
          minHeight: '150vh',
          backgroundImage: 'url("https://images.unsplash.com/photo-1597366340916-ce19a0d91040?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          position: 'relative', // Needed for absolute positioning of overlay text
        }}
      >
        <ResponsiveAppBar
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` }
          }}
        />
        <Toolbar />
        {/* Trending News Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: { xs: 90, sm: 120 },
            left: { xs: 24, sm: 48 },
            bgcolor: 'rgba(0,0,0,0.55)',
            color: '#fff',
            px: 4,
            py: 2,
            borderRadius: 3,
            boxShadow: 3,
            maxWidth: { xs: '90%', sm: '50%' },
            zIndex: 1,
          }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Trending Now
          </Typography>
          <Typography variant="h4" gutterBottom>
            In My Feelings
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <button
              style={{
                background: '#1976d2',
                color: '#fff',
                border: 'none',
                borderRadius: '24px',
                padding: '10px 28px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 2px 8px 0 rgba(25, 118, 210, 0.15)',
                transition: 'background 0.2s',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Listen Now
            </button>
            <Box
              sx={{
                ml: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 44,
                height: 44,
                borderRadius: '50%',
                bgcolor: 'rgba(255,255,255,0.15)',
                boxShadow: '0 2px 8px 0 rgba(255, 23, 68, 0.15)',
                cursor: 'pointer',
                transition: 'background 0.2s, transform 0.2s',
                '&:hover': {
                  bgcolor: '#ff1744',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <FavoriteRoundedIcon sx={{ color: '#ff1744', fontSize: 28 }} />
            </Box>
          </Box>
          {/* New container below button, with 2px gap */}
          <Box
            sx={{
              mt: '10px',
              bgcolor: 'rgba(255,255,255,0.10)',
              borderRadius: 2,
              p: 2,
              boxShadow: 1,
              color: '#fff',
              minHeight: 60,
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 1,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="body1">
                Top Artists
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#90caf9',
                  fontWeight: 500,
                  cursor: 'pointer',
                  ml: 2,
                  textAlign: 'right',
                  '&:hover': {
                    textDecoration: 'underline',
                    color: '#1976d2',
                  },
                }}
              >
                See more
              </Typography>
            </Box>
            {/* Artists grid */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 2,
              }}
            >
              {[
                { name: 'Drake', img: 'https://randomuser.me/api/portraits/men/11.jpg' },
                { name: 'Ariana', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
                { name: 'Ed Sheeran', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
                { name: 'Billie', img: 'https://randomuser.me/api/portraits/women/65.jpg' },
                { name: 'The Weeknd', img: 'https://randomuser.me/api/portraits/men/76.jpg' },

              ].map((artist) => (
                <Box key={artist.name} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 80 }}>
                  <Box
                    component="img"
                    src={artist.img}
                    alt={artist.name}
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #fff',
                      boxShadow: 2,
                      mb: 1,
                    }}
                  />
                  <Typography variant="caption" sx={{ color: '#fff', textAlign: 'center', fontWeight: 500 }}>
                    {artist.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          {/* Two horizontal containers below the artists container */}
          <Box sx={{ display: 'flex', gap: 1, mt: 2, width: '100%' }}>
            {/* Genre container with 6 boxes in a grid (LEFT SIDE) */}
            <Box
              sx={{
                flex: 0.8,
                bgcolor: 'rgba(33,150,243,0.15)',
                borderRadius: 2,
                p: 3,
                boxShadow: 1,
                color: '#fff',
                minHeight: 120,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">Genres</Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#90caf9',
                    fontWeight: 500,
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    ml: 2,
                    '&:hover': {
                      color: '#1976d2',
                    },
                  }}
                >
                  See more
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 2,
                  width: '100%',
                }}
              >
                {[
                  { name: 'Pop', color: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)', icon: <FavoriteIcon /> },
                  { name: 'Rock', color: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', icon: <AlbumIcon /> },
                  { name: 'Jazz', color: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)', icon: <QueueMusicIcon /> },
                  { name: 'Hip-Hop', color: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)', icon: <RadioIcon /> },
                  { name: 'Classical', color: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)', icon: <LibraryMusicIcon /> },
                  { name: 'EDM', color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', icon: <PlaylistPlayIcon /> },
                ].map((genre) => (
                  <Box
                    key={genre.name}
                    sx={{
                      background: genre.color,
                      borderRadius: 2,
                      p: 2,
                      textAlign: 'center',
                      fontWeight: 600,
                      color: '#fff',
                      boxShadow: 3,
                      fontSize: 18,
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: 80,
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&:hover': {
                        transform: 'scale(1.07)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <Box sx={{ mb: 1, fontSize: 32, color: '#fff' }}>
                      {genre.icon}
                    </Box>
                    {genre.name}
                  </Box>
                ))}
              </Box>
            </Box>
            {/* Discover Playlists container (MIDDLE) */}
            <Box
              sx={{
                flex: 1,
                bgcolor: 'rgba(255,193,7,0.15)',
                borderRadius: 2,
                p: 3,
                boxShadow: 1,
                color: '#fff',
                minHeight: 120,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                mr: 6, // <-- Add more margin to the right for extra space
              }}
            >
              <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="h6">Top Charts</Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#90caf9',
                    fontWeight: 500,
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    ml: 2,
                    '&:hover': {
                      color: '#1976d2',
                    },
                  }}
                >
                  See more
                </Typography>
              </Box>
              <Box>
                <SongPLayer/>
                </Box>
            </Box>
            {/* For You container (RIGHT SIDE) */}
            <Box
              sx={{
                flex: 1,
                bgcolor: 'rgba(156,39,176,0.15)',
                borderRadius: 2,
                p: 3,
                boxShadow: 1,
                color: '#fff',
                minHeight: 320,
                minWidth: 340,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                ml: 'auto',
                mt: -21,
                position: 'relative',
              }}
            >
              {/* Music Image */}
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80"
                alt="Current Song"
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: 3,
                  objectFit: 'cover',
                  boxShadow: 3,
                  mb: 1,
                }}
              />
              {/* Music Name */}
              <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 600, color: '#fff', textAlign: 'center' }}>
                In My Feelings
              </Typography>
              {/* Slider for time */}
              <Box sx={{ width: '90%', mt: 2 }}>
                <Slider
                  value={30}
                  min={0}
                  max={100}
                  sx={{
                    color: '#fff',
                    '& .MuiSlider-thumb': {
                      bgcolor: '#43cea2',
                    },
                    '& .MuiSlider-track': {
                      bgcolor: '#43cea2',
                    },
                    '& .MuiSlider-rail': {
                      bgcolor: '#fff',
                      opacity: 0.3,
                    },
                  }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: -1 }}>
                  <Typography variant="caption" sx={{ color: '#fff' }}>0:30</Typography>
                  <Typography variant="caption" sx={{ color: '#fff' }}>3:45</Typography>
                </Box>
              </Box>
              {/* Player Controls */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2, gap: 2 }}>
                <RepeatIcon sx={{ color: '#fff', fontSize: 28, cursor: 'pointer', opacity: 0.7 }} />
                <SkipPreviousIcon sx={{ color: '#fff', fontSize: 34, cursor: 'pointer' }} />
                <Box
                  sx={{
                    bgcolor: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
                    borderRadius: '50%',
                    width: 48,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 3,
                    mx: 1,
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'scale(1.12)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ color: '#fff', fontSize: 32 }} />
                  {/* Use <PauseIcon /> instead for pause state */}
                </Box>
                <SkipNextIcon sx={{ color: '#fff', fontSize: 34, cursor: 'pointer' }} />
                <PlaylistPlayIcon sx={{ color: '#fff', fontSize: 28, cursor: 'pointer', opacity: 0.7 }} />
              </Box>
              {/* Lyrics option at the end of the container */}
              <Box
                sx={{
                  mt: 'auto',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
                    px: 2,
                    py: 1,
                    borderRadius: 3,
                    boxShadow: 2,
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'scale(1.07)',
                      boxShadow: 6,
                      bgcolor: 'linear-gradient(135deg, #185a9d 0%, #43cea2 100%)',
                    },
                  }}
                >
                  <LibraryMusicIcon sx={{ color: '#fff', mr: 1 }} />
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#fff',
                      fontWeight: 600,
                      letterSpacing: 1,
                    }}
                  >
                    Lyrics
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* You can add more main content here if needed */}
      </Box>
    </Box>

  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;

