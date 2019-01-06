import React from 'react';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ProfileButton.css';

const ProfileButton = () => {
  return (
    <div>
      <button onClick={() => console.log('login to profile!')} className='profileButton'>
        <FontAwesomeIcon className='profileIcon' icon={faUser} />
      </button>
    </div>
  );
}

export default ProfileButton;