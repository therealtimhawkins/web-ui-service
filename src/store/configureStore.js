import { createStore } from 'redux';
import { restaurantReducers } from '../reducers/index';

export default () => {
  const store = createStore(
    restaurantReducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

