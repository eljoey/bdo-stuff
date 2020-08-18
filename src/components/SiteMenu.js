import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Marketplace from './Marketplace';
import UnderConstruction from './UnderConstruction';

function SiteMenu() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/marketplace'>
        <Marketplace />
      </Route>
      <Route path='/caphras-calculator'>
        <UnderConstruction location={'/caphras-calculator'} />
      </Route>
    </Switch>
  );
}

export default SiteMenu;
