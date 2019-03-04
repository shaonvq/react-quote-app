import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components';
import Start from './components/start';

export default () => (
  <Route component={App}>
    <IndexRoute component={Start} />
  </Route>
);
