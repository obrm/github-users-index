import React from 'react';
import spinner from '../../assets/spinner.gif';

const Spinner = () => (
  <>
    <img
      src={spinner}
      alt="Loading..."
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  </>
);

export default Spinner;
