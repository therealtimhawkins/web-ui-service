import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import SavedRestaurantList from '../../RestaurantsContainers/SavedRestaurantsList';
import LogoutForm from '../LogoutForm';
import { addSavedRestaurantData } from '../../../actions';

class UserProfile extends Component {

  componentDidMount = () => {
    this.getRestaurants();
  }

  getRestaurants = async () => {
    let auth = await this.authUser();
    console.log(auth);
    if (auth) {
      let result = await this.fetchRestaurants();
      this.props.addSavedRestaurantData(result.data.restaurants);
    }
  }

  authUser = async () => {
    const apiAuthEndpoint = process.env.REACT_APP_USER_DATA_API_URL + 'auth';
    try {
      let result = await axios.get(apiAuthEndpoint, { headers: { 'x-access-token': this.props.user.token }});
      return result;
    } catch {
      return null;
    }
  }

  fetchRestaurants = () => {
    const apiSaveRestaurantEndpoint = process.env.REACT_APP_PROFILE_API_URL + 'getRestaurants';
    try {
      let result = axios.post(apiSaveRestaurantEndpoint, {
        userEmail: this.props.user.email,
      });
      return result;
    } catch {
      return null;
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.user.name}</h2>
        <h2>{this.props.user.email}</h2>
        { this.props.savedRestaurantData ? 
          <SavedRestaurantList /> :
          null
        }
        <LogoutForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  savedRestaurantData: state.savedRestaurantData,
});

const mapDispatchToProps = {
  addSavedRestaurantData
};

const ConnectedUserProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

export default ConnectedUserProfile;
