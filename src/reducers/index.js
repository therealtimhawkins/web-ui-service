import { ADD_POSTCODE, ADD_RESTAURANT_DATA } from '../actions/types';
import { combineReducers } from 'redux';

export const restaurantReducers = (state = {}, action) => {
  switch (action.type) {
    case ADD_POSTCODE:
      return action.postcode;
    case ADD_RESTAURANT_DATA:
      return action.restaurantData;
    default:
      return state;
  }
}

export const reducers = combineReducers({
  restaurantReducers,
})