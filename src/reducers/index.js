import { ADD_POSTCODE, ADD_RESTAURANT_DATA, ADD_CURRENT_USER } from '../actions/types';
import { combineReducers } from 'redux';

export const restaurantReducers = (state = {}, action) => {
  switch (action.type) {
    case ADD_POSTCODE:
      return action.postcode;
    case ADD_RESTAURANT_DATA:
      return action.restaurantData;
    case ADD_CURRENT_USER:
      return action.user;
    default:
      return state;
  }
}

export const reducers = combineReducers({
  restaurantReducers,
})