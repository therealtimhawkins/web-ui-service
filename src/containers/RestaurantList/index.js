import React, {Fragment} from 'react';
import Restaurant from '../../components/Restaurant';
import './RestaurantList.css';

const RestaurantList = (props) => {
  const {
    restaurantData,
  } = props;

  const renderedItems = (restaurantData).map((restaurant, index) => (
    <Fragment key={restaurant._id}>
      <Restaurant restaurantData={restaurant} />
    </Fragment>
  ));

  return (
    <div className="restaurantList">
      {renderedItems}
    </div>
  );
};

export default RestaurantList;
