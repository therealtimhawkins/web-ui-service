import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header';
import HeroSection from '../../components/HeroSection';
import SearchBar from '../../components/SearchBar';
import RestaurantList from '../RestaurantList';
import './App.css';

class App extends Component {
  state = {
    postcode: '',
    restaurantData: [],
  };

  updatePostcodeState = (event) => {
    this.setState({
      postcode: event.target.value, 
    });
  };

  getRestaurantData = async () => {
    let result = await this.fetchDataFromRestaurantService();
    if (result) {
      this.setState({
        restaurantData: result.data,
      });
    };
    console.log(this.state.restaurantData);
  };

  fetchDataFromRestaurantService = async () => {
    try {
      let url = `http://localhost:4000/api/restaurants/${this.state.postcode}`;
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
        <HeroSection />
        <SearchBar 
          onChange={(e) => this.updatePostcodeState(e)}
          onClick={() => this.getRestaurantData() }
        />
        <RestaurantList restaurantData={this.state.restaurantData} />
      </div>
    );
  };
};

export default App;
