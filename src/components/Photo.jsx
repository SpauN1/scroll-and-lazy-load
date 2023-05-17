import React from 'react';

function Photo({ imageUrl, name }) {
  return (
    <div className="photo-card">
      <img src={imageUrl} alt="nature" />
      <h4>{name}</h4>
    </div>
  );
}

export default Photo;
