import React from 'react';
import './RestaurantTile.css';

const Restaurant = (props) => {
  const {
    restaurantData,
  } = props;

  return (
    <div className="restaurant">
      <div className="imageContainer">
        <img 
          src="images/food/mexican-tile.jpg" 
          alt={restaurantData.name} 
          className="restaurantImage"
        />
        <div className="name">{restaurantData.name}</div>
      </div>
      <div>{restaurantData.postcode}</div>
      <div>{restaurantData.rating}</div>
    </div>
  )
}

export default Restaurant;