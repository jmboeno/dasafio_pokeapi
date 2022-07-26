import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Card from '../components/Card/Card';
import { Provider, useSelector } from 'react-redux';
import { createTestStore } from '../ultils/testStore';

let store;

describe('Tests for <Card/> component', () => {
  beforeEach(() => {
    store = createTestStore();
  });

  it('Should render a Card link', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Card />
        </MemoryRouter>
      </Provider>,
    );
    const cardLinkElement = getByTestId('card-link');
    expect(cardLinkElement).toBeTruthy();
  });

  it('Should render pokemon id', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Card id={1} />
        </MemoryRouter>
      </Provider>,
    );
    const pokemonId = getByText('#1');
    expect(pokemonId.textContent).toBe('#1');
  });

  it('Should render pokemon name', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Card name="bulbasaur" />
        </MemoryRouter>
      </Provider>,
    );
    const pokemonName = getByText('bulbasaur');
    expect(pokemonName.textContent).toBe('bulbasaur');
  });

  it('Should render pokemon image', () => {
    let url_image =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
    const { getByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Card img={url_image} />
        </MemoryRouter>
      </Provider>,
    );
    const pokemonImage = getByRole('img');
    expect(pokemonImage.getAttribute('src')).toBe(url_image);
  });
});
