import React from 'react';
import { useHistory } from 'react-router-dom';

const Search = () => {
  const history = useHistory();

  const onClick = () => {
    if (history) {
      history.push('/');
    } else {
      console.log('no history object found');
    }
  };

  return (
    <div>
      Search
      <button onClick={onClick}>Back to main page</button>
    </div>
  );
};

export default Search;
