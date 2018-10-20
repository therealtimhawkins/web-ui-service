import React, {Component} from 'react';
import axios from 'axios';
import './SearchBar.css';

class SearchBar extends Component {
  state = {
    postcode: '',
  };

  updatePostcodeState = (event) => {
    this.setState({
      postcode: event.target.value, 
    });
  };

  getRestaurantData = async () => {
    try {
      let result = await axios.get('https://restaurant-data-service.herokuapp.com/api/restaurants/');
      console.log('result');
      return result;
    } catch {
      console.log('There was an error retreiving restaurant data...')
    }
  }

  render() {
    return (
      <div className="searchBar">
        <input className="searchBarInput" onChange={this.updatePostcodeState}></input>
        <button className="searchBarButton" onClick={this.getRestaurantData} >Find</button>
      </div>
    );
  };
};

export default SearchBar;
