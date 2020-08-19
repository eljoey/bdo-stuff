import React from 'react';
import { useParams } from 'react-router-dom';

const Items = () => {
  let { main, sub } = useParams();

  return (
    <div>
      GET INFO FOR {main}-{sub}
    </div>
  );
};

export default Items;
