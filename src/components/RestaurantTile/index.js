import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DishList from '../../containers/DishesList';
import RestaurantInfo from '../RestaurantInfo';
import './RestaurantTile.css';

class Restaurant extends Component {
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

  render() {
    return (
      <div className="restaurant">
        <div className="restaurantName" >{this.props.restaurantData.name}</div>

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

Restaurant.propTypes = {
  restaurantData: PropTypes.objectOf(
    PropTypes.oneOfType(
      [PropTypes.object, PropTypes.array, PropTypes.string, PropTypes.bool])),
}

export default Restaurant;
