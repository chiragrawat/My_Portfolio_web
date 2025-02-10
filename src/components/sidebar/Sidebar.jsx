import React from 'react';
import './sidebar.css';
import Button from './Button';

const Sidebar = ({ toggle, Hamburger }) => {
  return (
    <div className="sidebar">
      <div className="bg">
        <div className="bg__img" onClick={toggle}>
          <Button Hamburger={Hamburger} toggle={toggle} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
