import React, { Component } from 'react';
import DishList from '../../containers/DishesList';
import './RestaurantTile.css';

class Restaurant extends Component {
  state = {
    dishesVisible: false
  };

  dishButtonClicked = () => {
    this.setState({
      dishesVisible: !this.state.dishesVisible
    });
  };

  render() {
    return (
      <div className="restaurant">
        <div className="restaurantName" >{this.props.restaurantData.name}</div>

        <div className="ratingContainer">
          <div className="iconContainer" >
            <div>{this.props.restaurantData.rating}</div>
            <img src="images/icons/star-orange.png" className="" alt="star" />
          </div>
          <div className="iconContainer">
            <div>{this.props.restaurantData.postcode}</div>
            <img src="images/icons/map-pin-orange.png" className="" alt="pin" />
          </div>
          <div className="iconContainer">
            <div>{this.props.restaurantData.dishes.length}</div>
            <img src="images/icons/dish-orange.png" className="" alt="dish" />
          </div>
        </div>

        <button className="dishButton" onClick={() => this.dishButtonClicked()} >
          {this.props.restaurantData.dishes.length}
        </button>
        { this.state.dishesVisible ? <DishList dishData={this.props.restaurantData.dishes} /> : null }
      </div>
    );
  }
};

export default Restaurant;
