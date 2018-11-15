import React from 'react';
import Logo from '../../components/Logo';
import './Header.css';

const Header = (props) => {
  return (
    <div className="header">
      <button className="logoButton" onClick={props.logoOnClick} >
        <Logo />
      </button>
    </div>
  );  
};


export default Header;
