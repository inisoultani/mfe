import React from 'react';
import { LinearProgress } from '@material-ui/core';

const LoadingBar = () => {
  return (
    <div>
      <LinearProgress variant="indeterminate" />
    </div>
  );
};

export default LoadingBar;
