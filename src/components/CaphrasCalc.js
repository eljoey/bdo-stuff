import React from 'react';
import { Row, Col } from 'react-materialize';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import CaphrasForm from './CaphrasForm';
import CaphrasResult from './CaphrasResult';

const CaphrasCalc = () => {
  const { path } = useRouteMatch();
  return (
    <Row className='grey darken-3'>
      <Col s={5} l={4}>
        <CaphrasForm />
      </Col>

      <Col s={7} l={8}>
        <Switch>
          <Route path={`${path}/result`}>
            <CaphrasResult />
          </Route>
          <Route path={`${path}`}>Home</Route>
        </Switch>
      </Col>
    </Row>
  );
};

export default CaphrasCalc;
