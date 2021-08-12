import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';
const mount = (el, { onRemoteNavigate, defaultHistory }) => {
  const memoryHistory =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: ['/auth/signin'],
    });
  ReactDOM.render(<App history={memoryHistory} />, el);

  if (onRemoteNavigate) {
    memoryHistory.listen(onRemoteNavigate);
  }

  return {
    onContainerNavigate: (location) => {
      if (memoryHistory.location.pathname !== location.pathname) {
        memoryHistory.push(location.pathname);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-auth-root');
  if (el) {
    mount(el, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
