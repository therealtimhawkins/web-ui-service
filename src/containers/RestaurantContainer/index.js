import React, {Component} from 'react';
import RestaurantTileList from '../RestaurantTileList';

class RestaurantContainer extends Component {
  render() {
    return (
      <RestaurantTileList restaurantData={this.props.restaurantData} />
    )
  }
}

export default RestaurantContainer;