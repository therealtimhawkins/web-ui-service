import React, { Component } from 'react';
import { connect } from 'react-redux';
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

  render() {
    return (
      <div className="restaurant">
        <div className="restaurantName" >{this.props.restaurantData.name}</div>
        { this.props.user ? 
          <button onClick={() => console.log('button working')}>Save</button> 
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
