import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSavedRestaurantData } from '../../actions';
import axios from 'axios';
import Popup from 'reactjs-popup';
import DishList from '../../containers/RestaurantsContainers/DishesList';
import RestaurantInfo from '../RestaurantInfo';
import './RestaurantTile.css';

class RestaurantTile extends Component {
  state = {
    dishesVisible: false,
    veganClicked: false,
    vegetarianClicked: false,
    popupOpen: false,
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

  openPopup = () => {
    this.setState({
      popupOpen: true
    });
  }

  closePopup = () => {
    this.setState({
      popupOpen: false
    });
  }

  saveButtonClicked = async () => {
    console.log('Save Restaurant Button Clicked.')
    let auth = await this.authUser();
    console.log(`Auth\n ---> ${auth}`);
    if (auth) {
      let result = await this.saveRestaurant();
      console.log(`Result\n ---> ${result.status}`);
      if (result.status === 200) {
        this.openPopup();
        this.props.savedRestaurantData.push({
          name: this.props.restaurantData.name,
          postcode: this.props.restaurantData.postcode
        });
        this.props.addSavedRestaurantData(this.props.savedRestaurantData);
      }
      if (result.status === 409) {
        console.log('Restaurant already exits in saved restaurants.')
      }
    } else {
      console.log('JWT token has expired!');
    }
  }

  authUser = async () => {
    const apiAuthEndpoint = process.env.REACT_APP_USER_DATA_API_URL + 'auth';
    try {
      let result = await axios.get(apiAuthEndpoint, { headers: { 'x-access-token': this.props.user.token }});
      console.log(`Result of authentication: ${result.data.auth}`)
      return result.data.auth;
    } catch {
      return null;
    }
  }

  saveRestaurant = () => {
    const apiSaveRestaurantEndpoint = process.env.REACT_APP_PROFILE_API_URL + 'saveRestaurant';
    try {
      let result = axios.post(apiSaveRestaurantEndpoint, {
        userEmail: this.props.user.email,
        restaurant: {
          name: this.props.restaurantData.name,
          postcode: this.props.restaurantData.postcode
        }
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

        <Popup
          open={this.state.popupOpen}
          closeOnDocumentClick
          onClose={this.closePopup}
        >
          <span> Restaurant was saved to favourites! </span>
       </Popup>

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
  user: state.user,
  savedRestaurantData: state.savedRestaurantData
});

const mapDispatchToProps = {
  addSavedRestaurantData
};

const ConnectedRestaurantTile = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantTile);

export default ConnectedRestaurantTile;
