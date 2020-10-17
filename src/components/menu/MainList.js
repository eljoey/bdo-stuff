import React from 'react';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import ListItemLink from '../hooks/ListItemLink';
import { makeStyles } from '@material-ui/core/styles';
import Storefront from '@material-ui/icons/Storefront';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
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

const MainList = ({ selected, setSelected }) => {
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
        setSelected={setSelected}
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
        setSelected={setSelected}
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
        setSelected={setSelected}
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
        setSelected={setSelected}
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
        primary='kutum-or-nouver'
        isSelected={selected === 'kutum-or-nouver'}
        setSelected={setSelected} 
      />
    </List>
  );
};

export default MainList;
