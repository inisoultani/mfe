import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Search from './components/Search';

const App = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/search" component={Search} />
      </Switch>
    </Router>
  );
};

export default App;
