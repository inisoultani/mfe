import React, { useState, useEffect } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';

import Header from './components/Header';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import history from './history';
import LoadingBar from './components/Loading';

const SearchApp = React.lazy(() => import('./components/SearchApp'));
const MarketingApp = React.lazy(() => import('./components/MarketingApp'));
const AuthApp = React.lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'con',
});

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    console.log('isSignedIn triggered on container App');
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            isSignedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />

          <React.Suspense fallback={<LoadingBar />}>
            <Switch>
              <Route path="/auth">
                <AuthApp onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/search" component={SearchApp} />
              <Route path="/" component={MarketingApp} />
            </Switch>
          </React.Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;
