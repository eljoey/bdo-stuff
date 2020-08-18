import React from 'react';
import { NavLink } from 'react-router-dom';

const UnderConstruction = ({ location }) => {
  return (
    <div>
      <p>{`${location} IS UNDER CONSTRUCTION`}</p>
    </div>
  );
};

export default UnderConstruction;
