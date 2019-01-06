import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addPostcode, addRestaurantData } from '../../actions';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SearchBar.css';

class SearchBar extends React.Component {

  updatePostcodeState = (event) => {
    this.props.addPostcode({ postcode: event.target.value })
  };

  getRestaurantData = async () => {
    let result = await this.fetchDataFromRestaurantService();
    console.log(result);
    if (result) {
      this.props.addRestaurantData({ restaurantData: result.data })
    };
  };

  fetchDataFromRestaurantService = async () => {
    const restaurantApiUrl = process.env.REACT_APP_RESTAURANT_API_URL;
    try {
      let url = `${restaurantApiUrl}${this.props.postcode || ''}`;
      let result = await axios.get(url);
      return result;
    } catch {
      console.log('There was an error retreiving restaurant data...');
      return false;
    }
  };

  render() {
    return (
      <div className="searchBar">
        <input className="searchBarInput" type="text" placeholder="e.g. E14 7DX" 
          onChange={this.updatePostcodeState}></input>
        <button className="searchBarButton" onClick={this.getRestaurantData} >     
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  postcode: state.postcode,
  restaurantData: state.restaurantData,
});

const mapDispatchToProps = {
  addPostcode,
  addRestaurantData,
}

const ConnectedSearchBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

export default ConnectedSearchBar;

