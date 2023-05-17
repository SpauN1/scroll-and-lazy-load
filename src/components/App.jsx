import React from 'react';

import Photo from './Photo';
import photos from '../photos.json';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="photos">
        {photos.map((url, i) => (
          <Photo name={`Photo #${(i = i + 1)}`} imageUrl={url} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
