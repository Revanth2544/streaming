// src/components/FavoriteGallery.js
import React from 'react';

function FavoriteGallery() {
  return (
    <div className="container">
      <h2>Favorite Gallery</h2>
      <div className="gallery">
        <img src="sample-image1.jpg" alt="Favorite 1" />
        <img src="sample-image2.jpg" alt="Favorite 2" />
      </div>
    </div>
  );
}

export default FavoriteGallery;
