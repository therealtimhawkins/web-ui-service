import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import DishList from '../../containers/RestaurantsContainers/DishesList';
import RestaurantInfo from '../RestaurantInfo';
import './RestaurantTile.css';

class RestaurantTile extends Component {
  state = {
    dishesVisible: false,
    veganClicked: false,
    vegetarianClicked: false,
  };

  veganButtonClicked = () => {
    this.setState({
      veganClicked: !this.state.veganClicked
    });
    console.log(this.state.veganClicked);
  };

  vegetarianButtonClicked = () => {
    this.setState({
      vegetarianClicked: !this.state.vegetarianClicked
    });
    console.log(this.state.vegetarianClicked);
  };

  saveButtonClicked = async () => {
    let auth = await this.authUser();
    if (auth) {
      let result = await this.saveRestaurant();
      console.log(result);
    }
    console.log(auth);
  }

  authUser = async () => {
    const apiAuthEndpoint = process.env.REACT_APP_USER_DATA_API_URL + 'auth';
    try {
      let result = await axios.get(apiAuthEndpoint, { headers: { 'x-access-token': this.props.user.token }});
      return result;
    } catch {
      return null;
    }
  }

  saveRestaurant = () => {
    const apiSaveRestaurantEndpoint = process.env.REACT_APP_PROFILE_API_URL + 'saveRestaurant';
    try {
      let result = axios.post(apiSaveRestaurantEndpoint, {
        userEmail: this.props.user.email,
        restaurants: [
          {
            name: this.props.restaurantData.name,
            postcode: this.props.restaurantData.postcode
          }
        ]
      });
      return result;
    } catch {
      return null;
    }
  }

  render() {
    return (
      <div className="restaurant">
        <div className="restaurantName" >{this.props.restaurantData.name}</div>
        { this.props.user ? 
          <button onClick={this.saveButtonClicked}>Save</button> 
          : null
        }

        <RestaurantInfo restaurantData={this.props.restaurantData} tileClicked={this.props.tileClicked}/>

        <button className={ this.state.veganClicked ?
          "buttonSelected"
          : "buttonUnselected"
        } onClick={() => this.veganButtonClicked()} >
          Vegan
        </button>
        <button className={ this.state.vegetarianClicked ?
          "buttonSelected"
          : "buttonUnselected"
        } onClick={() => this.vegetarianButtonClicked()} >
          Vegetarian
        </button>
        { this.state.veganClicked || this.state.vegetarianClicked ? 
        <DishList 
          dishData={this.props.restaurantData.dishes} 
          veganOnly={ this.state.veganClicked && !this.state.vegetarianClicked} /> 
        : null }
      </div>
    );
  }
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {};

const ConnectedRestaurantTile = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantTile);

export default ConnectedRestaurantTile;
