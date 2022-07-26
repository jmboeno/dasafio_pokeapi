import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { createTestStore } from '../ultils/testStore';

let store;
describe('Tests for <App/> component', () => {
  beforeEach(() => {
    store = createTestStore();
  });

  it('Should render a App container', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>,
    );
    const appContainerElement = getByTestId('app-container');
    expect(appContainerElement).toBeTruthy();
  });

  it('Should render the next range in the list', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>,
    );
    const linkNextElement = await screen.findByRole('link', {
      name: /próximo/i,
    });
    fireEvent.click(linkNextElement);
    const list = await screen.findByTestId('list-container');
    console.log(prettyDOM(list));
  });
});
