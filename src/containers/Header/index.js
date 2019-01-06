import React from 'react';
import Logo from '../../components/Logo';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Header.css';

const Header = () => {
  return (
    <div className="header">
        <button  onClick={() => console.log('button clicked')} className='headerLogo'>
          <Logo />
        </button>
      <div className='headerProfileButton'>
        <button onClick={() => console.log('login to profile!')} >
          <FontAwesomeIcon className='profileIcon' icon={faUser} />
        </button>
      </div>
    </div>
  );  
};


export default Header;
