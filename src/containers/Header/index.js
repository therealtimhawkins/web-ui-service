import React from 'react';
import { connect } from 'react-redux';
import { setViewTo } from '../../actions';
import Logo from '../../components/Logo';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Header.css';

const Header = (props) => {
    return (
      <div className="header">
        <button  onClick={() => console.log('Logo Pressed!')} className='headerLogoButton'>
          <Logo />
        </button>
        <button className='headerProfileButton' onClick={() => props.setViewTo({ view: 'registrationForm'})} >
          <FontAwesomeIcon className='profileIcon' icon={faUser} />
        </button>
      </div>
    )
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  setViewTo,
}

const ConnectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default ConnectedHeader;
