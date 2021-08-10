import React from 'react';
import { Children } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import history from '../history';

const CustomRoute = ({ children }) => {
  return (
    <Route>
      <Header history={history} />
      {children}
    </Route>
  );
};

export default CustomRoute;
