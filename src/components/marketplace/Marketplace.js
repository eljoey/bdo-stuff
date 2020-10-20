import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Items from './Items';
import List from './List';
import ItemInfo from './ItemInfo';
import ItemPricing from './ItemPricing';
import MarketplaceHeader from './MarketplaceHeader';
import Search from './Search';
import { Grid, makeStyles } from '@material-ui/core';

// TODO: Implement Icons (https://database.desertcore.com/)

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '20px 0',
    height: 'auto',
    borderRadius: '15px',
    [theme.breakpoints.down('xs')]: {
      margin: '5px 0px',
    },
  },
  infoPanel: {
    backgroundColor: '#404040',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: '0 1px 1px 0',
    flexGrow: 1,
    marginRight: '20px',
    [theme.breakpoints.down('sm')]: {
      width: '40%',
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: '5px',
    },
  },
  list: {
    [theme.breakpoints.down('xs')]: {
      width: '40%',
    },
  },
}));

const Marketplace = () => {
  const classes = useStyles();
  const { path, url } = useRouteMatch();
  const [itemName, setItemName] = useState(null);

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <MarketplaceHeader />
        </Grid>
        <Grid item className={classes.list}>
          <List url={url}></List>
        </Grid>
        <Grid item className={classes.infoPanel}>
          <Switch>
            <Route path={`${path}/list/:main-:sub/:itemId/:enhanceLevel`}>
              <ItemPricing itemName={itemName} />
            </Route>
            <Route path={`${path}/list/:main-:sub/:itemId`}>
              <ItemInfo setItemName={setItemName} />
            </Route>
            <Route path={`${path}/list/:main-:sub`}>
              <Items className='col s8' />
            </Route>
            <Route path={`${path}/search/:searchTerm`}>
              <Search />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </>
  );
};

export default Marketplace;
