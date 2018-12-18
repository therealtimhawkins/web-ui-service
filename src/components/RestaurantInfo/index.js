import React from 'react';
import { faMapMarkerAlt, faUtensilSpoon, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RestaurantInfo = (props) => {
  return (
    <div className="ratingContainer">
    <div className="iconContainer" >
      <div>{props.restaurantData.rating}</div>
      <FontAwesomeIcon className='icon' icon={faStar} />
    </div>
    <button className='mapButton' onClick={() => console.log('test is working')}>            
    <div className="locationContainer">
        <div>{props.restaurantData.postcode}</div>
        <FontAwesomeIcon className='icon' icon={faMapMarkerAlt} />
    </div>
    </button>
    <div className="iconContainer">
      <div>{props.restaurantData.dishes.length}</div>
      <FontAwesomeIcon className='icon' icon={faUtensilSpoon} />
    </div>
  </div>
  );
};

export default RestaurantInfo;