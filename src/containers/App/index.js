import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import HeroSection from '../../components/HeroSection';
import SearchBar from '../../components/SearchBar';
import LoadingBar from '../../components/LoadingBar';
import RestaurantContainer from '../RestaurantsContainers/RestaurantContainer';
import RegistrationForm from '../UserContainers/RegistrationForm';
import Map from '../Map';
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

  render() {
    return (
      <div className="App">
        <Header logoOnClick={() => this.refreshHomepage()} />
        { this.state.heroSectionVisible ? <HeroSection /> : null }
        <SearchBar />
        { !this.props.restaurantData && !this.state.heroSectionVisible ? 
          <LoadingBar /> 
          : null
        }
        { this.props.restaurantData ?
          <div>
            <RestaurantContainer restaurantData={this.state.restaurantData} postcode={this.state.postcode}/> 
          </div>
          : null 
        }
        { this.props.view !== 'registrationForm' ? 
          <Map /> 
          : <RegistrationForm />
        }
      </div>
    );
  };
};

const mapStateToProps = state => ({
  restaurantData: state.restaurantData,
  view: state.view
});

const ConnectedApp = connect(
  mapStateToProps,
)(App);

export default ConnectedApp;
