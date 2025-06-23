import React from 'react';
import ResponsiveDrawer from './Components/ResponsiveDrawer';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import SongPLayer from './Components/SongPLayer'; 

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <ResponsiveDrawer />
      <SongPLayer/>
    </div>
  );
}

export default App;