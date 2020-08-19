import React from 'react';
import { Link } from 'react-router-dom';

const MarketplaceTabs = ({ subTabs, tabId, url }) => {
  return (
    <>
      {subTabs.map((tab) => (
        <>
          <Link to={`${url}/${tabId}-${tab.option}`} className='black-text'>
            {tab.title}
          </Link>
          <div className='divider'></div>
        </>
      ))}
    </>
  );
};

export default MarketplaceTabs;
