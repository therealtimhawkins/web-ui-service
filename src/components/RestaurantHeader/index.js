import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './RestaurantHeader.css';

const RestaurantHeader = (props) => {
  return (
    <div className="restaurantHeader">
      {props.restaurantData.length} Restaurants found in { props.postcode ? props.postcode : 'your location' }
    </div>
  );
};

RestaurantHeader.propTypes = {
  postcode: PropTypes.string,
}

const mapStateToProps = state => {
  return {
    restaurantData: state.restaurantData,
    postcode: state.postcode
  }
}

const ConnectedRestaurantHeader = connect(
  mapStateToProps,
)(RestaurantHeader)

export default ConnectedRestaurantHeader;
