import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import KutumOrNouverForm from './KutumOrNouverForm';
import KutumOrNouverResult from './KutumOrNouverResult';

const KutumOrNouver = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/result`}>
        <KutumOrNouverResult />
      </Route>
      <Route path={`${path}`}>
        <KutumOrNouverForm />
      </Route>
    </Switch>
  );
};

export default KutumOrNouver;
