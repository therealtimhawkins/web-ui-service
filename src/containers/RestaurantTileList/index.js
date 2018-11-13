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
      { restaurant.dishes.length >= 0 ?
        <RestaurantTile restaurantData={restaurant} />
        : null 
      }
    </Fragment>
  ));

  return (
    <div className="restaurantList">
      {renderedItems}
    </div>
  );
};

export default RestaurantList;
