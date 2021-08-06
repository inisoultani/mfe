import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'mar',
});

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/pricing" exact component={Pricing} />
          </Switch>
        </StylesProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
