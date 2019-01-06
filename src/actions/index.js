import { ADD_POSTCODE, ADD_RESTAURANT_DATA } from './types';

export const addPostcode = postcode => ({
  type: ADD_POSTCODE,
  postcode
});

export const addRestaurantData = restaurantData => ({
  type: ADD_RESTAURANT_DATA,
  restaurantData
});