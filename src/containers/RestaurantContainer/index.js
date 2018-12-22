import React, {Component} from 'react';
import RestaurantHeader from '../../components/RestaurantHeader';
import RestaurantTileList from '../RestaurantTileList';
import MapHeader from '../../components/MapHeader';
import Map from '../Map';

class RestaurantContainer extends Component {
  state = {
    restaurantSelected: false
  };

  tileClicked = () => {
    this.setState({
      restaurantSelected: !this.state.restaurantSelected
    });
  };

  restaurantDiv = () => {
    return (
      <div>
        <RestaurantHeader 
          restaurantData={this.props.restaurantData} 
          postcode={this.props.postcode} 
          /> 
        <RestaurantTileList restaurantData={this.props.restaurantData} tileClicked={this.tileClicked}/>
      </div>
    );
  };

  mapDiv = () => {
    return (
      <div>
        <MapHeader tileClicked={this.tileClicked} />
        <Map />s
      </div>
    )
  }

  render() {
    return (
      <div>
        { this.state.restaurantSelected ? this.mapDiv() : this.restaurantDiv() }
      </div>
    );
  };
};

export default RestaurantContainer;