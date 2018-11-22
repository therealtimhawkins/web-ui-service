import React from 'react';
import PropTypes from 'prop-types';
import './RestaurantHeader.css';

const RestaurantHeader = (props) => {
  return (
    <div className="restaurantHeader">
      {props.restaurantData.length} Restaurants found in { props.postcode ? props.postcode : 'your location' }
    </div>
  );
};

RestaurantHeader.propTypes = {
  postcode: PropTypes.string,
}

export default RestaurantHeader;
