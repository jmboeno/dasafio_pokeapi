import { LOAD_DATA, SET_PAGE, SET_POKEMON_URL } from './constants';

export const loadData = (data) => ({
  type: LOAD_DATA,
  data,
});

export const setPokemon = (pokemon_url) => ({
  type: SET_POKEMON_URL,
  pokemon_url,
});

export const setPage = (page) => ({
  type: SET_PAGE,
  page,
});
