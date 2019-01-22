import { ADD_POSTCODE, ADD_RESTAURANT_DATA, ADD_CURRENT_USER } from '../actions/types';

const initialState = [
]

export const restaurantReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSTCODE:
    console.log(state);
      return Object.assign({}, state, {
        postcode: action.postcode
      });
    case ADD_RESTAURANT_DATA:
    console.log(state);
      return Object.assign({}, state, {
        restaurantData: action.restaurantData
      });
    case ADD_CURRENT_USER:
    console.log(state);
      return Object.assign({}, state, {
        user: action.user
      });
    default:
      return state;
  }
}

export default restaurantReducers;