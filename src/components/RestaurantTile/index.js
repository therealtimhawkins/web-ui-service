import React, {Component} from 'react';
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
    console.log(this.state.dishesVisible);
  };

  render() {
    return (
      <div className="restaurant">
        <div>{this.props.restaurantData.name}</div>
        <div>{this.props.restaurantData.postcode}</div>
        <button className="dishButton" onClick={() => this.dishButtonClicked()} >
          {this.props.restaurantData.dishes.length}
        </button>
        { this.state.dishesVisible ? <DishList dishData={this.props.restaurantData.dishes} /> : null }
      </div>
    );
  }
};

export default Restaurant;
