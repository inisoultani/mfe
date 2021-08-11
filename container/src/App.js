import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import history from './history';

const SearchApp = React.lazy(() => import('./components/SearchApp'));

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
          <React.Suspense fallback={<div>Loading</div>}>
            <SearchApp />
          </React.Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;
