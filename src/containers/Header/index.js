import React from 'react';
import Logo from '../../components/Logo';
import ProfileButton from '../../components/ProfileButton';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="headerLogo" >
        <Logo />
      </div>
      <div className="headerProfileButton">
        <ProfileButton  />
      </div>
    </div>
  );  
};


export default Header;
