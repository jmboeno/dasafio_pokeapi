import { createStore } from 'redux';
import { dataReducer } from '../redux/reducers';

export function createTestStore() {
  const store = createStore(dataReducer);
  return store;
}
