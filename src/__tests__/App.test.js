import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { findByText, fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { createTestStore } from '../ultils/testStore';

let store;
describe('Tests for App container', () => {
  beforeEach(() => {
    store = createTestStore();
  });

  it('Should render a list', async () => {
    const { findByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
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
          <App />
        </MemoryRouter>
      </Provider>,
    );
    const listItemsElement = await findAllByRole('listitem');
    expect(listItemsElement.length).toBe(20);
  });

  it('Should render only the button "next"', async () => {
    const { findByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>,
    );
    const linkNextElement = await findByRole('link', { name: /próximo/i });
    expect(linkNextElement).toBeTruthy();
  });

  it('Should render the next range in the list', async () => {
    const { findByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>,
    );
    const linkNextElement = await findByRole('link', { name: /próximo/i });
    fireEvent.click(linkNextElement);
    const listItemsElement = await screen.findAllByRole('listitem');
    expect(listItemsElement.length).toBe(20);
  });

  it('Should render only the button "previous"', async () => {
    const { findByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>,
    );
    const linkNextElement = await findByRole('link', { name: /próximo/i });
    fireEvent.click(linkNextElement);
    const linkPreviousElement = screen.findByRole('link', {
      name: /voltar/i,
    });
    expect(linkPreviousElement).toBeTruthy();
  });
});
