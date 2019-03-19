import React from 'react';
import PropTypes from 'prop-types';

export default function Quote({ quote, onClick }) {
  return (
    <>
      <h1>Quote</h1>
      <p>{quote.text}</p>
      <button onClick={onClick}>New Quote</button>
    </>
  );
}

Quote.propTypes = {
  quote: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};
