import React, { useState } from 'react';
import { Divider } from 'react-materialize';
import { Link, useLocation } from 'react-router-dom';
import ListItemLink from '../hooks/ListItemLink';

const ListItems = ({ subTabs, tabId, url }) => {
  const selectedItem = useLocation()
    .pathname.replace('/marketplace/list/', '')
    .split('/')[0];
  const [selected, setSelected] = useState(selectedItem);
  console.log(selectedItem);
  return (
    <>
      {subTabs.map((tab) => {
        console.log(selected === `${tabId}-${tab.option}`);
        if (tabId === 10 && tab.option === 18) {
          return <></>;
        } else {
          return (
            <>
              <ListItemLink
                to={`${url}/list/${tabId}-${tab.option}`}
                primary={tab.title}
                isSelected={selected === `${tabId}-${tab.option}`}
                setSelected={setSelected}
              />
            </>
          );
        }
      })}
      {/* {subTabs.map((tab) => {
        // BDO Skips 18 on Awakening Weapons for some god awful reasoning.
        if (tabId === 10 && tab.option === 18) {
          return <></>;
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
              <Divider />
            </>
          );
        }
      })} */}
    </>
  );
};

export default ListItems;

// {
//   subTabs.map((tab) => {
//     if (tabId === 10 && tab.option === 18) {
//       return <></>;
//     } else {
//       return (
//         <>
//           <ListItemLink
//             to={`${url}/list/${tabId}-${tab.option}`}
//             primary={tab.title}
//             isSelected={selectedItem === `${tabId}-${tab.option}`}
//           />
//         </>
//       );
//     }
//   });
// }
