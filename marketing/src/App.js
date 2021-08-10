import React from 'react';
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'mar',
});

const App = ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/pricing" exact component={Pricing} />
          </Switch>
        </StylesProvider>
      </Router>
    </div>
  );
};

export default App;
