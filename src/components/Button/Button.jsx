import React from 'react';

const Button = ({ onClick, isHidden }) => {
  return (
    <button type="button" className="Button" onClick={onClick} hidden={isHidden}>
      Load more
    </button>
  );
};

export default Button;
