import { createStore } from 'redux';
// import countReducer from '../reducers/countReducers';
import restaurantDataReducer from '../reducers/restaurantDataReducers';

export default () => {
  const store = createStore(restaurantDataReducer);

  return store;
};

