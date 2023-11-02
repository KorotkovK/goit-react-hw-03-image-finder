import React from 'react';

const Modal = ({ src, alt, onClose }) => {
  const handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="Overlay" onClick={onClose}>
      <div className="modal">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;
