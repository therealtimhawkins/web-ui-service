import { createStore } from 'redux';
import countReducer from '../reducers/countReducers';

export default () => {
  const store = createStore(countReducer);

  return store;
};

