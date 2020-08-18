import React from 'react';
import MarketplaceSelector from './MarketplaceSelector';
import MarketplaceMenu from './MarketplaceMenu';

const Marketplace = () => {
  return (
    <div className='row'>
      <div className='col s4'>
        <MarketplaceSelector />
      </div>
      <div className='col s8'>
        <MarketplaceMenu />
      </div>
    </div>
  );
};

export default Marketplace;
