import React from 'react';

const Head = ({ title }) => {
  {
    document.title = 'Ranek | ' + title;
  }
  return null;
};

export default Head;
