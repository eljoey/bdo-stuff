import React from 'react';
import MarketplaceList from './MarketplaceList';
import MarketplaceMenu from './MarketplaceMenu';

const Marketplace = () => {
  return (
    <div className='row'>
      <div className='col s4'>
        <MarketplaceList />
      </div>
      <div className='col s8'>
        <MarketplaceMenu />
      </div>
    </div>
  );
};

export default Marketplace;
