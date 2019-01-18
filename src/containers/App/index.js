import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header';
import SearchBar from '../../components/SearchBar';
import RestaurantContainer from '../RestaurantsContainers/RestaurantContainer';
import RegistrationForm from '../UserContainers/RegistrationForm';
import './App.css';

class App extends Component {
  state = {
    postcode: '',
  };

  refreshHomepage = () => {
    this.setState({
      postcode: '',
      restaurantData: null,
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <SearchBar />
          <Route 
            path='/restaurants' 
            render={(routeProps) => (
              <RestaurantContainer restaurantData={this.state.restaurantData} postcode={this.state.postcode}/> 
            )} 
          />
          <Route path='/user' component={RegistrationForm} />
        </div>
      </Router>
    );
  };
};

const mapStateToProps = state => ({
  restaurantData: state.restaurantData,
});

const ConnectedApp = connect(
  mapStateToProps,
)(App);

export default ConnectedApp;
