import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className="ImageGallery">
    {images.map((image) => (
      <ImageGalleryItem
        key={image.id}
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => onImageClick(image.largeImageURL)}
      />
    ))}
  </ul>
);

export default ImageGallery;
