import { ADD_POSTCODE, ADD_RESTAURANT_DATA, ADD_CURRENT_USER, ADD_SAVED_RESTAURANT_DATA } from './types';

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

export const addSavedRestaurantData = savedRestaurantData => ({
 type: ADD_SAVED_RESTAURANT_DATA,
 savedRestaurantData
});