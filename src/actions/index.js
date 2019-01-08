import { ADD_POSTCODE, ADD_RESTAURANT_DATA, SET_VIEW_TO } from './types';

export const addPostcode = postcode => ({
  type: ADD_POSTCODE,
  postcode
});

export const addRestaurantData = restaurantData => ({
  type: ADD_RESTAURANT_DATA,
  restaurantData
});

export const setViewTo = view => ({
  type: SET_VIEW_TO,
  view
})