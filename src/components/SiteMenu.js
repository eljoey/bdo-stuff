import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UnderConstruction from './UnderConstruction';

function SiteMenu() {
  return (
    <Switch>
      <Route exact path='/'>
        <UnderConstruction location={'/'} />
      </Route>
      <Route exact path='/marketplace'>
        <UnderConstruction location={'/marketplace'} />
      </Route>
      <Route path='/caphras-calculator'>
        <UnderConstruction location={'/caphras-calculator'} />
      </Route>
    </Switch>
  );
}

export default SiteMenu;
