import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import CaphrasForm from './CaphrasForm';
import CaphrasResult from './CaphrasResult';

const CaphrasCalc = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/result`}>
        <CaphrasResult />
      </Route>
      <Route path={`${path}`}>
        <CaphrasForm />
      </Route>
    </Switch>
  );
};

export default CaphrasCalc;
