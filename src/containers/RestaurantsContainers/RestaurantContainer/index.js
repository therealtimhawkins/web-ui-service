import React, {Component} from 'react';
import { connect } from 'react-redux';
import RestaurantHeader from '../../../components/RestaurantHeader';
import RestaurantsList from '../RestaurantsList';
import LoadingBar from '../../../components/LoadingBar';
import MapHeader from '../../../components/MapHeader';
import Map from '../../Map';

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
        { this.props.restaurantData ? 
        <div>
          <RestaurantHeader /> 
          <RestaurantsList tileClicked={this.tileClicked}/>
        </div>
        :
        <LoadingBar />
        }
      </div>
    );
  };

  mapDiv = () => {
    return (
      <div>
        <MapHeader tileClicked={this.tileClicked} />
        <Map />
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

const mapStateToProps = state => ({
  postcode: state.postcode,
  restaurantData: state.restaurantData,
});

const ConnectedRestaurantContainer = connect(
  mapStateToProps,
)(RestaurantContainer);

export default ConnectedRestaurantContainer;