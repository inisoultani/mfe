import React from 'react';

const Search = ({ history }) => {
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
