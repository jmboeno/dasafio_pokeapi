import { createStore } from 'redux';
import { dataReducer } from './reducers';

export const Store = createStore(
  dataReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
