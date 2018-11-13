import React from 'react';
import './RestaurantHeader.css';

const RestaurantHeader = (props) => {
  return (
    <div className="restaurantHeader">
      {props.restaurantData.length} Restaurants found in { props.postcode ? props.postcode : 'your location' }
    </div>
  );
};

export default RestaurantHeader;
