import React from 'react';
import { Router, Route } from 'react-router-dom';

import Search from './Search';

const App = ({ history }) => {
  return (
    <Router history={history}>
      <Route path="/search" exact component={Search} />
    </Router>
  );
};

export default App;
