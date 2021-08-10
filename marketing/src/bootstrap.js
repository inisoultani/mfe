import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';

import App from './App';
const mount = (el, history) => {
  const memoryHistory = createMemoryHistory();
  ReactDOM.render(<App history={history} />, el);
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-marketing-root');
  if (el) {
    mount(el);
  }
}

export { mount };
