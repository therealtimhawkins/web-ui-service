import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Header.css';

const Header = (props) => {
    return (
      <div className="header">
        <Link  to='/' className='headerLogoButton'>
          <Logo />
        </Link>
        <Link to='/user/registration' className='headerProfileButton' >
          <FontAwesomeIcon className='profileIcon' icon={faUser} />
        </Link>
      </div>
    )
};

export default Header;
