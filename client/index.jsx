import { authenticateUser, getUserSession } from './auth/awsCognito.js';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes.jsx';
import store, { history } from './store';

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
