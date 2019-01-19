import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../../history';
import Header from '../Header';
import SearchBar from '../../components/SearchBar';
import UserProfile from '../UserContainers/UserProfile';
import RestaurantContainer from '../RestaurantsContainers/RestaurantContainer';
import RegistrationForm from '../UserContainers/RegistrationForm';
import LoginForm from '../UserContainers/LoginForm';
import './App.css';

const App = () => {
  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <SearchBar />
        <Route 
          path='/user/profile'
          component={UserProfile}
        />
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

export default App;
