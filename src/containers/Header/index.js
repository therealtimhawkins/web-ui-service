import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../../components/Logo';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Header.css';

const Header = (props) => {

  const setRoute = () => {
    if (props.user) {
      return '/user/profile';
    } else {
      return '/user/registration';
    }
  }

  return (
    <div className="header">
      <Link  to='/' className='headerLogoButton'>
        <Logo />
      </Link>
      <Link to={setRoute()} className='headerProfileButton' >
        <FontAwesomeIcon className='profileIcon' icon={faUser} />
      </Link>
    </div>
  )
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {

}

const ConnectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default ConnectedHeader;
