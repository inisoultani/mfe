import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';
import history from '../history';

const DashboardApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};

export default DashboardApp;
