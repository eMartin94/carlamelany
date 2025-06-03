import React from 'react';

const MenuButton = ({ isActive, onClick }) => (
  <button
    className={`menu-burger ${isActive ? 'active' : ''}`}
    onClick={onClick}
  />
);

export default MenuButton;
