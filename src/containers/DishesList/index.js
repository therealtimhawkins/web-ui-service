import React from 'react';
import DishTile from '../../components/DishTile';
import './DishList.css';

const DishesList = (props) => {
  const {
    dishData,
    veganOnly,
  } = props;

  const renderedDishes = (dishData).map((dish, index) => (
    <div className="dishList" key={index}>
      { veganOnly ? 
          dish.vegan ?
          <DishTile dishData={dish} />
          : null 
        : <DishTile dishData={dish} />}
      
    </div>
  ));

  return(
    <div> 
      {renderedDishes}
    </div>
  )
}

export default DishesList;
