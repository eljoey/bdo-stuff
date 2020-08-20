import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ListItems = ({ subTabs, tabId, url }) => {
  const selectedItem = useLocation()
    .pathname.replace('/marketplace/list/', '')
    .split('/')[0];

  return (
    <>
      {subTabs.map((tab) => (
        <>
          <Link
            to={`${url}/list/${tabId}-${tab.option}`}
            className={
              selectedItem === `${tabId}-${tab.option}`
                ? 'blue-text'
                : 'black-text'
            }
          >
            {tab.title}
          </Link>
          <div className='divider'></div>
        </>
      ))}
    </>
  );
};

export default ListItems;
