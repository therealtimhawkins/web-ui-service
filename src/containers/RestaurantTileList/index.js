import React, {Fragment} from 'react';
import RestaurantTile from '../../components/RestaurantTile';
import './RestaurantTileList.css';

const RestaurantList = (props) => {
  const {
    restaurantData,
    tileClicked,
  } = props;

  const renderedItems = (restaurantData).map((restaurant, index) => (
    <Fragment key={restaurant._id}>
      <RestaurantTile restaurantData={restaurant} tileClicked={() => tileClicked()}/>
    </Fragment>
  ));

  return (
    <div className="restaurantList">
      {renderedItems}
    </div>
  );
};

export default RestaurantList;
