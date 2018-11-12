import React, {Fragment} from 'react';
import RestaurantTile from '../../components/RestaurantTile';
import './RestaurantTileList.css';

const RestaurantList = (props) => {
  const {
    restaurantData,
    // tileClicked,
  } = props;

  const renderedItems = (restaurantData).map((restaurant, index) => (
    <Fragment key={restaurant._id}>
      {/* <button onClick={tileClicked}></button> */}
      <RestaurantTile restaurantData={restaurant} />
    </Fragment>
  ));

  return (
    <div className="restaurantList">
      {renderedItems}
    </div>
  );
};

export default RestaurantList;
