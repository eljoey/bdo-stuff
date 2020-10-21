import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import UpgradeForm from './UpgradeForm';
import UpgradeResults from './UpgradeResults';

const UpgradeCalc = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/results`}>
        <UpgradeResults />
      </Route>
      <Route>
        <UpgradeForm path={`${path}`} />
      </Route>
    </Switch>
  );
};

export default UpgradeCalc;