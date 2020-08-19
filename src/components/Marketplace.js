import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import MarketplaceInfo from './MarketplaceInfo';
import MarketplaceList from './MarketplaceList';

const Marketplace = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className='row'>
      <div className='col s4'>
        <MarketplaceList url={url} />
      </div>

      <Switch>
        <Route exact path={path}>
          THIS IS THE DEFAULT PAGE
        </Route>
        <Route path={`${path}/:main-:sub`}>
          <MarketplaceInfo className='col s8' />
        </Route>
      </Switch>
    </div>
  );
};

export default Marketplace;
