import React from 'react';

import './App.scss';

import Collage from './components/collage';
import UnsplashImage from './components/unsplashimage';

function App() {
  return (
    <div className="App">
      <Collage />
      <UnsplashImage/>
    </div>
  );
}

export default App;
