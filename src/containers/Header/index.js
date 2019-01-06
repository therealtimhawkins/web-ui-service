import React from 'react';
import Logo from '../../components/Logo';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <button className="headerLogo" onClick={() => console.log('button clicked')} >
        <Logo />
      </button>
      <button onClick={() => console.log('login to profile!')} className='headerProfileButton'>
        <FontAwesomeIcon className='profileIcon' icon={faUser} />
      </button>
    </div>
  );  
};


export default Header;
