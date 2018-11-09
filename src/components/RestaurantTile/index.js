import React from 'react';
import './RestaurantTile.css';

const Restaurant = (props) => {
  const {
    restaurantData,
  } = props;

  const onClick = () => {
    console.log('working');
  };

  return (
    <div className="restaurant">
      <div className="imageContainer">
        <button onClick={() => onClick()}>
          <img 
            src="images/food/mexican-tile.jpg" 
            alt={restaurantData.name} 
            className="restaurantImage"
          />
        </button>
        <div className="name">{restaurantData.name}</div>
      </div>
      <div>{restaurantData.postcode}</div>
      <div>{restaurantData.rating}</div>
    </div>
  );
};

export default Restaurant;
