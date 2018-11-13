import React from 'react';
import DishTile from '../../components/DishTile';
import './DishList.css';

const DishesList = (props) => {
  const {
    dishData
  } = props;

  const renderedDishes = (dishData).map((dish, index) => (
    <div className="dishList" key={index}>
      {/* <button onClick={tileClicked}></button> */}
      <DishTile dishData={dish} />
    </div>
  ));

  return(
    <div> 
      {renderedDishes}
    </div>
  )
}

export default DishesList;
