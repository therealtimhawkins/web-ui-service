import { ADD_POSTCODE } from '../actions/types';
import { combineReducers } from 'redux';

export const postcode = (state = {}, action) => {
  switch (action.type) {
    case ADD_POSTCODE:
      return action.postcode;
    default:
      return state;
  }
}

export const reducers = combineReducers({
  postcode,
})