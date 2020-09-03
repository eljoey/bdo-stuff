import React from 'react';
import { Row, Col } from 'react-materialize';
import UpgradeForm from './UpgradeForm';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import UpgradeResults from './UpgradeResults';

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
          <Route path={path}>
            <div
              style={{
                height: '100%',
                border: 'solid 1px white',
                marginTop: '8px',
                marginBottom: '8px',
                backgroundColor: '#616161',
              }}
            >
              <h3>Notes:</h3>
              <ol>
                <li>Lots of little problems to work out</li>
                <li>get the ap/dp/total stat diff between items on backend</li>
                <li></li>
              </ol>
            </div>
          </Route>
        </Switch>
      </Col>
    </Row>
  );
};

export default UpgradeCalc;
