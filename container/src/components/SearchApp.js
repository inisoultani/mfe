import React, { useEffect, useRef } from 'react';
import { mount } from 'search/SearchApp';
import history from '../history';

const SearchApp = () => {
  const searchRef = useRef(null);

  useEffect(() => {
    console.log('search mount');
    const { onContainerNavigate } = mount(searchRef.current, {
      onRemoteNavigate: (location) => {
        if (history.location.pathname !== location.pathname) {
          history.push(location.pathname);
        }
      },
    });

    history.listen(onContainerNavigate);
  }, [mount]);

  return <div ref={searchRef}>searchdiv</div>;
};

export default SearchApp;
