import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';
const mount = (el, { onRemoteNavigate, defaultHistory, initialEntry }) => {
  const memoryHistory =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialEntry ? initialEntry : '/'],
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
  const el = document.querySelector('#dev-marketing-root');
  if (el) {
    mount(el, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
