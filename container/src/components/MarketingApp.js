import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref.current);
    mount(ref.current);
  });

  return <div ref={ref}></div>;
};

export default MarketingApp;
