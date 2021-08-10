import React, { useEffect, useRef } from 'react';
import { mount } from 'search/SearchApp';
import history from '../history';

const SearchApp = () => {
  const searchRef = useRef(null);

  useEffect(() => {
    console.log('search mount');
    mount(searchRef.current, history);
  }, [mount]);

  return <div ref={searchRef}>test</div>;
};

export default SearchApp;
