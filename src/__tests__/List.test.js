import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import List from '../components/List/List';
import { Provider } from 'react-redux';
import { createTestStore } from '../ultils/testStore';

let store;
describe('Tests for <List/> component', () => {
  beforeEach(() => {
    store = createTestStore();
  });

  it('Should render a List container', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <List />
        </MemoryRouter>
      </Provider>,
    );
    const listContainerElement = getByTestId('list-container');
    expect(listContainerElement).toBeTruthy();
  });

  it('Should render a list', async () => {
    const { findByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <List />
        </MemoryRouter>
      </Provider>,
    );
    const listElement = await findByRole('list');
    expect(listElement).toBeTruthy();
  });

  it('Should render a list with twenty items', async () => {
    const { findAllByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <List />
        </MemoryRouter>
      </Provider>,
    );
    const listItemsElement = await findAllByRole('listitem');
    expect(listItemsElement.length).toBe(20);
  });
});
