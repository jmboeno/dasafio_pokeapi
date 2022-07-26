import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react';
import Details from '../components/Details/Details';
import { Provider, useDispatch } from 'react-redux';
import { createTestStore } from '../ultils/testStore';

let store;
const initialState = {
  data: {},
  pokemon_url: 'https://pokeapi.co/api/v2/pokemon/1/',
  page: 'https://pokeapi.co/api/v2/pokemon/',
};

describe('Tests for <Datails/> component', () => {
  beforeEach(() => {
    store = createTestStore(initialState);
  });

  it('Should render a Details container', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>,
    );
    const detailsContainerElement = getByTestId('details-container');
    expect(detailsContainerElement).toBeTruthy();
  });

  it('Should render pokemon id', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>,
    );
    const pokemonId = await findByText('#1');
    expect(pokemonId.textContent).toBe('#1');
  });

  it('Should render pokemon name', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>,
    );
    const pokemonName = await findByText('bulbasaur');
    expect(pokemonName.textContent).toBe('bulbasaur');
  });

  it('Should render the pokemon image', async () => {
    let url_image =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
    const { findByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>,
    );
    const pokemonImage = await findByRole('img');
    expect(pokemonImage.getAttribute('src')).toBe(url_image);
  });

  it('Should render pokemon height', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>,
    );
    const pokemonHeight = await findByText('Altura:');
    expect(pokemonHeight.parentNode.textContent).toBe('Altura: 70cm');
  });

  it('Should render pokemon weight', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>,
    );
    const pokemonWeight = await findByText('Peso:');
    expect(pokemonWeight.parentNode.textContent).toBe('Peso: 6.9kg');
  });

  it('Should render pokemon abilities', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>,
    );
    expect(await findByText('overgrow')).toBeTruthy();
    expect(await findByText('chlorophyll')).toBeTruthy();
  });

  it('Should render basic pokemon stats', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>,
    );

    expect(await findByText('hp (45/200):')).toBeTruthy();
    expect(await findByText('attack (49/200):')).toBeTruthy();
    expect(await findByText('defense (49/200):')).toBeTruthy();
    expect(await findByText('special-attack (65/200):')).toBeTruthy();
    expect(await findByText('special-defense (65/200):')).toBeTruthy();
    expect(await findByText('speed (45/200):')).toBeTruthy();
  });

  it('It should render the pokemon type information', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>,
    );
    expect(await findByText('grass')).toBeTruthy();
    expect(await findByText('poison')).toBeTruthy();
  });

  it('Should render a button that changes the pokemons image from front to back', async () => {
    const { findByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>,
    );
    const frontImage = (await findByRole('img')).getAttribute('src');
    const btnSeeBack = await findByRole('button', { name: 'Ver Costas' });
    fireEvent.click(btnSeeBack);
    const backImage = (await findByRole('img')).getAttribute('src');
    expect(frontImage).not.toBe(backImage);
  });

  it('Should render a button that changes the pokemons image from back to front', async () => {
    const { findByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>,
    );
    const frontImage = (await findByRole('img')).getAttribute('src');
    const btnSeeBack = await findByRole('button', { name: 'Ver Costas' });
    fireEvent.click(btnSeeBack);
    const backImage = (await findByRole('img')).getAttribute('src');
    expect(frontImage).not.toBe(backImage);

    const btnSeeFront = await findByRole('button', { name: 'Ver Frente' });
    fireEvent.click(btnSeeFront);
    const frontImage2 = (await findByRole('img')).getAttribute('src');
    expect(frontImage).toBe(frontImage2);
  });
});
