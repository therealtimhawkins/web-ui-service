import { createStore } from 'redux';
import { postcode } from '../reducers/index';

export default () => {
  const store = createStore(postcode);
  return store;
};

