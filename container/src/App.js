import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import SearchApp from './components/SearchApp';
import history from './history';
import CustomRoute from './components/CustomRoute';

const generateClassName = createGenerateClassName({
  productionPrefix: 'con',
});

const App = () => {
  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
          <SearchApp />
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;
