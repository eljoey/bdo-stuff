import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Marketplace from './marketplace/Marketplace';
import CaphrasCalc from './caphras-calc/CaphrasCalc';
import UpgradeCalc from './upgrade-calc/UpgradeCalc';
import KutumOrNouver from './kutumOrNouver/KutumOrNouver';

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
      <Route path='/kutum-or-nouver'>
        <KutumOrNouver />
      </Route>
    </Switch>
  );
}

export default SiteMenu;
