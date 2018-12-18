import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { faMapMarkerAlt, faUtensilSpoon, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DishList from '../../containers/DishesList';
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
        <div className="ratingContainer">
          <div className="iconContainer" >
            <div>{this.props.restaurantData.rating}</div>
            <FontAwesomeIcon className='icon' icon={faStar} />
          </div>

          <button className='mapButton' onClick={() => console.log('test is working')}>            

          <div className="locationContainer">
              <div>{this.props.restaurantData.postcode}</div>
              <FontAwesomeIcon className='icon' icon={faMapMarkerAlt} />
          </div>
          </button>


          <div className="iconContainer">
            <div>{this.props.restaurantData.dishes.length}</div>
            <FontAwesomeIcon className='icon' icon={faUtensilSpoon} />
          </div>
        </div>

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
