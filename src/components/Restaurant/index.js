import React from 'react';

const Restaurant = (props) => {
  const {
    restaurantData,
  } = props;

  return (
    <div>
      <div>Name: {restaurantData.name}</div>
      <div>Postcode: {restaurantData.postcode}</div>
      <div>Rating: {restaurantData.rating}</div>
    </div>
  )
}

export default Restaurant;
