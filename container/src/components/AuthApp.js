import React, { useEffect, useRef } from 'react';
import { mount } from 'auth/AuthApp';
import history from '../history';

const AuthApp = ({ onSignIn }) => {
  const authRef = useRef(null);

  useEffect(() => {
    // console.log('search mount');
    const { onContainerNavigate } = mount(authRef.current, {
      onRemoteNavigate: (location) => {
        if (history.location.pathname !== location.pathname) {
          history.push(location.pathname);
        }
      },
      onSignIn,
    });

    history.listen(onContainerNavigate);
  }, [mount]);

  return <div ref={authRef}>authdiv</div>;
};

export default AuthApp;
