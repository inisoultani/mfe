import React from 'react';
import { Children } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import history from '../history';

const CustomRoute = (props) => {
  console.log(props);
  return (
    <Route {...props}>
      <Header history={history} />
      {props.children}
    </Route>
  );
};

export default CustomRoute;
