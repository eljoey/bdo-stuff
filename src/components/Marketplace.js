import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Items from './Items';
import List from './List';
import ItemInfo from './ItemInfo';

const Marketplace = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className='row'>
      <div className='col s4'>
        <List url={url} />
      </div>

      <Switch>
        <Route path={`${path}/list/:main-:sub/:itemId`}>
          <ItemInfo />
        </Route>
        <Route path={`${path}/list/:main-:sub`}>
          <Items className='col s8' />
        </Route>
        <Route path={path}>THIS IS THE DEFAULT PAGE</Route>
      </Switch>
    </div>
  );
};

export default Marketplace;
