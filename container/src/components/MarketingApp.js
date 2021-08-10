import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import history from '../history';

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, history);
  });

  return <div ref={ref}></div>;
};

export default MarketingApp;
