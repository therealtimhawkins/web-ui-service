import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header';
import HeroSection from '../../components/HeroSection';
import SearchBar from '../../components/SearchBar';
import LoadingBar from '../../components/LoadingBar';
import RestaurantHeader from '../../components/RestaurantHeader';
import RestaurantContainer from '../RestaurantContainer';
import './App.css';

class App extends Component {
  state = {
    postcode: '',
    heroSectionVisible: true,
  };

  refreshHomepage = () => {
    this.setState({
      postcode: '',
      heroSectionVisible: true,
      restaurantData: null,
    });
  };

  updatePostcodeState = (event) => {
    this.setState({
      postcode: event.target.value, 
    });
  };

  showHideHeroSection = () => {
    if (this.state.heroSectionVisible) {
      this.setState({
        heroSectionVisible: !this.state.heroSectionVisible,
      });
    };
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
    try {
      let url = `${restaurantApiUrl}${this.state.postcode}`;
      let result = await axios.get(url);
      console.log(result);
      return result;
    } catch {
      console.log('There was an error retreiving restaurant data...');
      return false;
    }
  };

  render() {
    return (
      <div className="App">
        <Header logoOnClick={() => this.refreshHomepage()} />
        <LoadingBar />
        { this.state.heroSectionVisible ? <HeroSection /> : null }
        <SearchBar 
          onChange={(e) => this.updatePostcodeState(e)}
          onClick={() => this.searchButtonClicked() }
        />
        { this.state.restaurantData ?
          <div>
            <RestaurantHeader 
              restaurantData={this.state.restaurantData} 
              postcode={this.state.postcode} 
            />
            <RestaurantContainer restaurantData={this.state.restaurantData} /> 
          </div>
          : null 
        }
      </div>
    );
  };
};

export default App;
