import React from 'react';
import Logo from '../../components/Logo';
import LoginButton from '../../components/LoginButton';
import './Header.css';

const Header = () => (
  <div className="header">
    <Logo />
    <LoginButton />
  </div>
);

export default Header;
