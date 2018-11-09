import React, {Component} from 'react';
import RestaurantTileList from '../RestaurantTileList';

class RestaurantContainer extends Component {
  state = {
    restaurantSelected: false
  };

  tileClicked = () => {
    console.log('restaurant has been clicked');
  }

  render() {
    return (
      <RestaurantTileList restaurantData={this.props.restaurantData} tileClicked={() => this.tileClicked()}/>
    )
  }
}

export default RestaurantContainer;