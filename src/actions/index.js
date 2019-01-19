import { ADD_POSTCODE, ADD_RESTAURANT_DATA, ADD_CURRENT_USER } from './types';

export const addPostcode = postcode => ({
  type: ADD_POSTCODE,
  postcode
});

export const addRestaurantData = restaurantData => ({
  type: ADD_RESTAURANT_DATA,
  restaurantData
});

export const addCurrentUser = user => ({
  type: ADD_CURRENT_USER,
  user
});
