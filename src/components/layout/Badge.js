import React from 'react';

const Badge = ({ type, text, number }) => {
  return (
    <div className={`badge badge-${type}`}>{text}: {number}</div>
  );
};

export default Badge;