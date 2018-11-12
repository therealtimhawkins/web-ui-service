import React from 'react';

const DishTile = (props) => {
  const {
    dishData,
  } = props;

  return (
    <div>
      <div>{dishData.name}</div>
      <div>{dishData.price}</div>
    </div>
  )
};

export default DishTile;