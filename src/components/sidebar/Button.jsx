import React from 'react';
import Links from './Links';

const Button = ({ Hamburger, toggle }) => {
  return (
    <div>
      {Hamburger ? (
        <i className="fa-solid fa-bars fa-xl" style={{ color: 'black' }}></i>
      ) : (
        <Links Hamburger={Hamburger} toggle={toggle} />
      )}
    </div>
  );
};

export default Button;
