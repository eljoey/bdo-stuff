import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Marketplace from './Marketplace';
import CaphrasCalc from './CaphrasCalc';
import UpgradeCalc from './UpgradeCalc';

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
      <Route path='/upgrade-calculator'>
        <UpgradeCalc />
      </Route>
    </Switch>
  );
}

export default SiteMenu;
