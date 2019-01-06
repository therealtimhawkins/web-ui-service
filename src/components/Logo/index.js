import React from 'react';
import './Logo.css';

const Logo = () => (
  <button className="logoButton" onClick={() => console.log('button clicked')} >
    <img src="images/logo/logoVegitableOrange.svg" className="logoVegitable" alt="logoVegitable" />
  </button>
);

export default Logo;
