import React, {Component} from 'react';
import RestaurantTileList from '../RestaurantTileList';

class RestaurantContainer extends Component {
  state = {
    restaurantSelected: false
  };

  tileClicked = () => {
    this.setState({
      restaurantSelected: !this.state.restaurantSelected
    });
    console.log(this.state.restaurantSelected);
  };

  render() {
    return (
      <RestaurantTileList restaurantData={this.props.restaurantData} tileClicked={this.tileClicked}/>
    );
  };
};

export default RestaurantContainer;