import React from 'react';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './MapHeader.css';

const MapHeader = (props) => {
  return (
    <div className="mapHeader" >
      <button className='backButton' onClick={() => props.tileClicked()}>
        <FontAwesomeIcon className='backIcon' icon={faArrowLeft} />
      </button>
    </div>
  );
};

export default MapHeader;
