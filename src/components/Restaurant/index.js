import React from 'react';
import './Restaurant.css';

const Restaurant = (props) => {
  const {
    restaurantData,
  } = props;

  return (
    <div className="restaurant">
      <div>Name: {restaurantData.name}</div>
      <div>Postcode: {restaurantData.postcode}</div>
      <div>Rating: {restaurantData.rating}</div>
    </div>
  )
}

export default Restaurant;
