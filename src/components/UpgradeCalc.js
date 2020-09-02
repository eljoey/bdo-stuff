import React from 'react';
import { Row, Col } from 'react-materialize';
import UpgradeForm from './UpgradeForm';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import UpgradeResults from './utils/UpgradeResults';

const UpgradeCalc = () => {
  const { path } = useRouteMatch();
  return (
    <Row className='grey darken-3'>
      <Col s={4}>
        <UpgradeForm />
      </Col>
      <Col s={8}>
        <Switch>
          <Route path={`${path}/results`}>
            <UpgradeResults />
          </Route>
          <Route path={path} />
        </Switch>
      </Col>
    </Row>
  );
};

export default UpgradeCalc;
