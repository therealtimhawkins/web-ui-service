import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header';
import SearchBar from '../../components/SearchBar';
import RestaurantContainer from '../RestaurantsContainers/RestaurantContainer';
import RegistrationForm from '../UserContainers/RegistrationForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <SearchBar />
        <Route 
          path='/restaurants' 
          render={(routeProps) => (
            <RestaurantContainer /> 
          )} 
        />
        <Route path='/user' component={RegistrationForm} />
      </div>
    </Router>
  );
};

export default App;
