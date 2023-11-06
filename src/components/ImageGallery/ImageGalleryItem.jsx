import React from 'react';

const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <li className="Gallery-item">
      <img className="ImageGalleryItem-image" src={src} alt={alt} onClick={onClick} />
    </li>
  );
};

export default ImageGalleryItem;
