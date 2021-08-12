import React from 'react';
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'mar',
});

const App = ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
          <Switch>
            <Route path="/auth/signin" exact component={Signin} />
            <Route path="/auth/signup" exact component={Signup} />
          </Switch>
        </StylesProvider>
      </Router>
    </div>
  );
};

export default App;
