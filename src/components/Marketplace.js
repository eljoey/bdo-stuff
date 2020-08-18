import React, { useState } from 'react';

const Marketplace = () => {
  const [toggledId, setToggledId] = useState('');

  const toggleCollapse = (id) => {
    setToggledId(toggledId !== id ? id : '');
  };

  return <div></div>;
};

export default Marketplace;
