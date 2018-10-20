import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header';
import SearchBar from '../../components/SearchBar';

class App extends Component {
  state = {
    postcode: '',
  };

  updatePostcodeState = (event) => {
    this.setState({
      postcode: event.target.value, 
    });
    console.log(this.state.postcode);
  };

  getRestaurantData = async () => {
    try {
      let url = `http://localhost:4000/api/restaurants/${this.state.postcode}`;
      let result = await axios.get(url);
      console.log(result);
      return result;
    } catch {
      console.log('There was an error retreiving restaurant data...')
    }
  }

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
}

export default App;
