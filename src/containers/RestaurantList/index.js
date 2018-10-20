import React, {Fragment} from 'react';
import Restaurant from '../../components/Restaurant';

const RestaurantList = (props) => {
  const {
    restaurantData,
  } = props;

  const renderedItems = (restaurantData).map((restaurant, index) => (
    <Fragment key={restaurantData._id}>
      <Restaurant restaurantData={restaurant} />
    </Fragment>
  ));

  return (
    <div>
      {renderedItems}
    </div>
  );
};

export default RestaurantList;
