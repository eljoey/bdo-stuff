import React from 'react';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import ListItemLink from '../hooks/ListItemLink';
import { makeStyles } from '@material-ui/core/styles';
import Storefront from '@material-ui/icons/Storefront';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Home from '@material-ui/icons/Home';
import Opacity from '@material-ui/icons/Opacity';

const useStyles = makeStyles((theme) => ({
  whiteColor: {
    color: 'white',
  },
  linkSelected: {
    color: '#3FA3C4',
  },
}));


const MainList = ({ updateOpen, selected, updateSelected, user }) => {
  const classes = useStyles();

  return (
    <List>
      <ListItemLink
        to=''
        icon={
          <Home
            className={clsx(
              classes.whiteColor,
              selected === '' && classes.linkSelected
            )}
          />
        }
        primary='Home'
        isSelected={selected === ''}
        updateSelected={updateSelected}
        updateOpen={updateOpen}
      />
      <ListItemLink
        to='marketplace'
        icon={
          <Storefront
            className={clsx(
              classes.whiteColor,
              selected === 'marketplace' && classes.linkSelected
            )}
          />
        }
        primary='Marketplace'
        isSelected={selected === 'marketplace'}
        updateSelected={updateSelected}
        updateOpen={updateOpen}
      />
      <ListItemLink
        to='caphras-calculator'
        icon={
          <Opacity
            className={clsx(
              classes.whiteColor,
              selected === 'caphras-calculator' && classes.linkSelected
            )}
          />
        }
        primary='Caphras Calculator'
        isSelected={selected === 'caphras-calculator'}
        updateSelected={updateSelected}
        updateOpen={updateOpen}
      />
      <ListItemLink
        to='upgrade-calculator'
        icon={
          <AddShoppingCart
            className={clsx(
              classes.whiteColor,
              selected === 'upgrade-calculator' && classes.linkSelected
            )}
          />
        }
        primary='Upgrade Calculator'
        isSelected={selected === 'upgrade-calculator'}
        updateSelected={updateSelected}
        updateOpen={updateOpen}
      />
      <ListItemLink
        to='kutum-or-nouver'
        icon={
          <CompareArrowsIcon
            className={clsx(
              classes.whiteColor,
              selected === 'kutum-or-nouver' && classes.linkSelected
            )}
          />
        }
        primary='Kutum vs Nouver'
        isSelected={selected === 'kutum-or-nouver'}
        updateSelected={updateSelected}
        updateOpen={updateOpen}
      />

      {/* {Only shows if user logged in} */}
      { user && <ListItemLink
        to='alerts'
        icon={
          <NotificationsNoneIcon
            className={clsx(
              classes.whiteColor,
              selected === 'alerts' && classes.linkSelected
            )}
          />
        }
        primary='Alerts'
        isSelected={selected === 'alerts'}
        updateSelected={updateSelected}
        updateOpen={updateOpen}
      />}
    </List>
  );
};

export default MainList;
