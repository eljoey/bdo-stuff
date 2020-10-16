import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Items from './Items';
import List from './List';
import ItemInfo from './ItemInfo';
import ItemPricing from './ItemPricing';
import { Col, Row } from 'react-materialize';
import MarketplaceHeader from './MarketplaceHeader';
import Search from './Search';
import { AppBar, Grid, makeStyles, Paper, Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

// TODO: Implement Icons (https://database.desertcore.com/)

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '15px 0',
    height: 'auto',
    borderRadius: '15px',
  },
}));

const Marketplace = () => {
  const classes = useStyles();
  const { path, url } = useRouteMatch();
  const [itemName, setItemName] = useState(null);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <MarketplaceHeader />
      </Grid>
      <Grid item xs={4}>
        <List url={url}></List>
      </Grid>
    </Grid>
    // <Row className='grey darken-3'>
    //   <Col s={4} l={3}>
    //     <List url={url} />
    //   </Col>
    //   <Col s={8} l={9}>
    //     <MarketplaceHeader />
    //   </Col>

    //   <Col s={8} l={9}>
    //     <Switch>
    //       <Route path={`${path}/list/:main-:sub/:itemId/:enhanceLevel`}>
    //         <ItemPricing itemName={itemName} />
    //       </Route>
    //       <Route path={`${path}/list/:main-:sub/:itemId`}>
    //         <ItemInfo setItemName={setItemName} />
    //       </Route>
    //       <Route path={`${path}/list/:main-:sub`}>
    //         <Items className='col s8' />
    //       </Route>
    //       <Route path={`${path}/search/:searchTerm`}>
    //         <Search />
    //       </Route>
    //       <Route path={path} />
    //     </Switch>
    //   </Col>
    // </Row>
  );
};

export default Marketplace;
