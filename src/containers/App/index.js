import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header';
import HeroSection from '../../components/HeroSection';
import SearchBar from '../../components/SearchBar';
import RestaurantTileList from '../RestaurantTileList';
import './App.css';

class App extends Component {
  state = {
    postcode: '',
    restaurantData: [],
    heroSectionVisible: true,
  };

  updatePostcodeState = (event) => {
    this.setState({
      postcode: event.target.value, 
    });
  };

  showHideHeroSection = () => {
    this.setState({
      heroSectionVisible: !this.state.heroSectionVisible,
    });
  };

  searchButtonClicked = () => {
    this.getRestaurantData();
    this.showHideHeroSection();
  };

  getRestaurantData = async () => {
    let result = await this.fetchDataFromRestaurantService();
    if (result) {
      this.setState({
        restaurantData: result.data,
      });
    };
  };

  fetchDataFromRestaurantService = async () => {
    const restaurantApiUrl = process.env.REACT_APP_RESTAURANT_API_URL;
    console.log(restaurantApiUrl);
    try {
      let url = `${restaurantApiUrl}${this.state.postcode}`;
      let result = await axios.get(url);
      return result;
    } catch {
      console.log('There was an error retreiving restaurant data...');
      return false;
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        { this.state.heroSectionVisible ? <HeroSection /> : null }
        <SearchBar 
          onChange={(e) => this.updatePostcodeState(e)}
          onClick={() => this.searchButtonClicked() }
        />
        <RestaurantTileList restaurantData={this.state.restaurantData} />
      </div>
    );
  };
};

export default App;
