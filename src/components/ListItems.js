import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ListItems = ({ subTabs, tabId, url }) => {
  const selectedItem = useLocation()
    .pathname.replace('/marketplace/list/', '')
    .split('/')[0];

  return (
    <>
      {subTabs.map((tab) => {
        // BDO Skips 18 on Awakening Weapons for some god awful reasoning.
        if (tabId === 10 && tab.option === 18) {
          return;
        } else {
          return (
            <>
              <Link
                to={`${url}/list/${tabId}-${tab.option}`}
                className={
                  selectedItem === `${tabId}-${tab.option}`
                    ? 'amber-text'
                    : 'black-text'
                }
              >
                {tab.title}
              </Link>
              <div className='divider'></div>
            </>
          );
        }
      })}
    </>
  );
};

export default ListItems;
