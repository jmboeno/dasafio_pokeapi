import { LOAD_DATA, SET_PAGE, SET_POKEMON_URL } from './constants';

const initialState = {
  data: {},
  pokemon_url: '',
  page: 'https://pokeapi.co/api/v2/pokemon/',
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        data: action.data,
      };
    case SET_POKEMON_URL:
      return {
        ...state,
        pokemon_url: action.pokemon_url,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.page,
      };
    default:
      return state;
  }
};
