import React from 'react';
import { connect } from 'react-redux'; 

const SavedRestaurantList = (props) => {

  const renderedItems = props.savedRestaurantData.map((restaurant, index) => (
    <div>
      <h4>{restaurant.name}</h4>
      <h4>{restaurant.postcode}</h4>
    </div>
  ))

  return (
    <div>
      {renderedItems}
    </div>
  );
}

const mapStateToProps = (state) => ({
  savedRestaurantData: state.savedRestaurantData
});

const mapDispatchToProps = {

}

const ConnectedSavedRestaurantList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedRestaurantList);

export default ConnectedSavedRestaurantList;