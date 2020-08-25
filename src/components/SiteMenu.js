import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Marketplace from './Marketplace';
import UnderConstruction from './UnderConstruction';
import CaphrasCalc from './CaphrasCalc';

// TODO: Implement Region Selection.

function SiteMenu() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/marketplace'>
        <Marketplace />
      </Route>
      <Route path='/caphras-calculator'>
        <CaphrasCalc />
      </Route>
    </Switch>
  );
}

export default SiteMenu;
