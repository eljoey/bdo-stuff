import React from 'react';
import { Link } from 'react-router-dom';

const MarketplaceTabs = ({ subTabs, tabId }) => {
  return (
    <>
      {subTabs.map((tab) => (
        <>
          <Link
            to={`/marketplace/${tabId}-${tab.option}`}
            className='black-text'
          >
            {tab.title}
          </Link>
          <div className='divider'></div>
        </>
      ))}
    </>
  );
};

export default MarketplaceTabs;
