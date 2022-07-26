import { createStore } from 'redux';
import { dataReducer } from '../redux/reducers';

export function createTestStore(initialState) {
  const store = createStore(dataReducer, initialState);
  return store;
}
