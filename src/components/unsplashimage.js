import React from 'react';

const UnsplashImage = ({ url, key }) => (
    <div className="image-item" key={key} >
      <img src={url} />
      
    </div>
);

export default UnsplashImage;