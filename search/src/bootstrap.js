import React from 'react';
import ReactDOM from 'react-dom';

import Search from './components/Search';

const mount = (el, history) => {
  ReactDOM.render(<Search history={history} />, el);
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-search');
  if (el) {
    mount(el);
  }
}

export { mount };
