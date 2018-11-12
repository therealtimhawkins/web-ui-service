import React, {Fragment} from 'react';
import DishTile from '../../components/DishTile';

const DishesList = (props) => {
  const {
    dishData
  } = props;

  const renderedDishes = (dishData).map((dish, index) => (
    <Fragment key={index}>
      {/* <button onClick={tileClicked}></button> */}
      <DishTile dishData={dish} />
    </Fragment>
  ));

  return(
    <div> 
      {renderedDishes}
    </div>
  )
}

export default DishesList;
