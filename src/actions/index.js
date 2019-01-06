import { ADD_POSTCODE } from './types';

export const addPostcode = postcode => ({
  type: ADD_POSTCODE,
  postcode
});