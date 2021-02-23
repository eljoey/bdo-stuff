import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  links: {
    color: 'black',
    flexGrow: 1,
    textDecoration: 'none',
    '&:hover': {
      color: '#3FA3C4',
    },
  },
  divider: {
    color: 'white',
  },
  linkSelected: {
    color: '#3FA3C4',
  },
}));

const ListItems = ({ subTabs, tabId, url }) => {
  const classes = useStyles();
  const selectedItem = useLocation()
    .pathname.replace('/marketplace/list/', '')
    .split('/')[0];
  const [selected, setSelected] = useState(selectedItem);

  const handleClick = (link) => {
    setSelected(link);
  };

  return (
    <>
      {subTabs.map((tab) => {
        // BDO Skips 18 on Awakening Weapons for some god awful reasoning.
        if ((tabId === 10 && tab.option === 18) || (tabId === 65 && tab.option === 8)) {
          return null;
        } else {
          return (
            <div className={classes.root} key={`${tabId}-${tab.option}`}>
              <Link
                to={`${url}/list/${tabId}-${tab.option}`}
                className={clsx(
                  classes.links,
                  selected === `${tabId}-${tab.option}` && classes.linkSelected
                )}
                onClick={() => handleClick(`${tabId}-${tab.option}`)}
              >
                {tab.title}
              </Link>
              <Divider className={classes.divider} />
            </div>
          );
        }
      })}
    </>
  );
};

export default ListItems;
