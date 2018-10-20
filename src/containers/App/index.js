import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header';
import SearchBar from '../../components/SearchBar';

class App extends Component {
  state = {
    postcode: '',
    data: [],
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
        data: result.data,
      });
    };
    console.log(this.state.data);
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
        <SearchBar 
          onChange={(e) => this.updatePostcodeState(e)}
          onClick={() => this.getRestaurantData() }
        />
      </div>
    );
  };
};

export default App;
