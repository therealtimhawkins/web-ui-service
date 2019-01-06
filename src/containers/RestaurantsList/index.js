import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import RestaurantTile from '../../components/RestaurantTile';
import './RestaurantTileList.css';

const RestaurantsList = (props) => {
  const {
    tileClicked
  } = props;

  const renderedItems = (props.restaurantData).map((restaurant, index) => (
    <Fragment key={restaurant._id}>
      <RestaurantTile restaurantData={restaurant} tileClicked={tileClicked} />
    </Fragment>
  ));

  return (
    <div className="restaurantList">
      {renderedItems}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    restaurantData: state.restaurantData
  }
}

const ConnectedRestaurantsList = connect(
  mapStateToProps,
)(RestaurantsList);

export default ConnectedRestaurantsList;
