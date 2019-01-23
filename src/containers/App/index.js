import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../../history';
import Header from '../Header';
import SearchBar from '../../components/SearchBar';
import UserProfile from '../UserContainers/UserProfile';
import RestaurantContainer from '../RestaurantsContainers/RestaurantContainer';
import RegistrationForm from '../UserContainers/RegistrationForm';
import LoginForm from '../UserContainers/LoginForm';
import './App.css';

const App = (props) => {
  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <SearchBar />
        { props.user ? 
          <Route 
            path='/user/profile'
            component={UserProfile}
          />
          : null  
        }
        <Route 
          path='/restaurants' 
          render={(routeProps) => (
            <RestaurantContainer /> 
          )} 
        />
        <Route path='/user/registration' component={RegistrationForm} />
        <Route path='/user/login' component={LoginForm} />
      </div>
    </Router>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {

}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
