import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store/store';

import { AppRouter } from './router/AppRouter';

import './assets/styles/style.scss';

export const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </Provider>
  );
};
