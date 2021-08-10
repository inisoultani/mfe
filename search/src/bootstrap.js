import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import App from './components/App';

const mount = (el, { onRemoteNavigate }) => {
  const memoryHistory = createMemoryHistory();
  ReactDOM.render(<App history={memoryHistory} />, el);

  memoryHistory.listen(onRemoteNavigate);

  return {
    onContainerNavigate: (location) => {
      console.log('onContainerNavigate');
      if (memoryHistory.location.pathname !== location.pathname) {
        memoryHistory.push(location.pathname);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-search');
  if (el) {
    mount(el, {});
  }
}

export { mount };
