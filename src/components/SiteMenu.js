import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Marketplace from './marketplace/Marketplace';
import CaphrasCalc from './caphras-calc/CaphrasCalc';
import UpgradeCalc from './upgrade-calc/UpgradeCalc';
import KutumOrNouver from './kutumOrNouver/KutumOrNouver';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Alerts from './Alerts';
import PrivateRoute from './hooks/PrivateRoute';

function SiteMenu({ updateUser }) {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/login'>
        <Login updateUser={updateUser} />
      </Route>
      <Route path='/account/create'>
        <CreateAccount updateUser={updateUser} />
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
      <PrivateRoute path='/alerts' component={Alerts} />
    </Switch>
  );
}

export default SiteMenu;
