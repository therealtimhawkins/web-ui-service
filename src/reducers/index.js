import { ADD_POSTCODE, ADD_RESTAURANT_DATA, SET_VIEW_TO } from '../actions/types';
import { combineReducers } from 'redux';

export const restaurantReducers = (state = {}, action) => {
  switch (action.type) {
    case ADD_POSTCODE:
      return action.postcode;
    case ADD_RESTAURANT_DATA:
      return action.restaurantData;
    case SET_VIEW_TO:
      return action.view;
    default:
      return state;
  }
}

export const reducers = combineReducers({
  restaurantReducers,
})