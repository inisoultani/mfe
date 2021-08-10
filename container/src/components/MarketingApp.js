import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import history from '../history';

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    const { onContainerNavigate } = mount(ref.current, {
      onRemoteNavigate: (location) => {
        console.log(location.pathname);
        console.log(history.location.pathname);
        if (history.location.pathname !== location.pathname) {
          history.push(location.pathname);
        }
        // history.push(location.pathname);
      },
    });
    history.listen(onContainerNavigate);
  }, []);

  return <div ref={ref}></div>;
};

export default MarketingApp;
