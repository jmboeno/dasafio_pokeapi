import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {
  fireEvent,
  logRoles,
  prettyDOM,
  render,
  screen,
} from '@testing-library/react';
import ButtonBar from '../components/ButtonBar/ButtonBar';
import { Provider } from 'react-redux';
import { createTestStore } from '../ultils/testStore';

let store;

describe('Tests for </Button> component', () => {
  beforeEach(() => {
    store = createTestStore();
  });

  it('Should render a ButtonBar container', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ButtonBar />
        </MemoryRouter>
      </Provider>,
    );
    const listContainerElement = getByTestId('buttonbar-container');
    expect(listContainerElement).toBeTruthy();
  });

  it('Should render only the button "next"', async () => {
    const { findByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ButtonBar next={true} />
        </MemoryRouter>
      </Provider>,
    );
    const linkNextElement = await findByRole('link', { name: /próximo/i });
    expect(linkNextElement).toBeTruthy();
  });

  it('Should render only the button "previous"', async () => {
    const { findByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ButtonBar previous={true} />
        </MemoryRouter>
      </Provider>,
    );
    const linkPreviousElement = await screen.findByRole('link', {
      name: /voltar/i,
    });
    expect(linkPreviousElement).toBeTruthy();
  });

  it('Should render only the button "back"', async () => {
    const { findByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ButtonBar
            next={false}
            previous={false}
            loadPage={false}
            back={true}
          />
        </MemoryRouter>
      </Provider>,
    );
    const linkBackElement = await findByRole('link', {
      name: /voltar/i,
    });
    expect(linkBackElement).toBeTruthy();
  });
});
