import { ADD_POSTCODE, ADD_RESTAURANT_DATA, ADD_CURRENT_USER, ADD_SAVED_RESTAURANT_DATA } from '../actions/types';

const initialState = [
]

export const restaurantReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSTCODE:
      return Object.assign({}, state, {
        postcode: action.postcode
      });
    case ADD_RESTAURANT_DATA:
      return Object.assign({}, state, {
        restaurantData: action.restaurantData
      });
    case ADD_CURRENT_USER:
      return Object.assign({}, state, {
        user: action.user
      });
    case ADD_SAVED_RESTAURANT_DATA:
      return Object.assign({}, state, {
        savedRestaurantData: action.savedRestaurantData
      })
    default:
      return state;
  }
}

export default restaurantReducers;