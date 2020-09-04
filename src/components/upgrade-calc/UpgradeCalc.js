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
              <h3 className='center-align' style={{}}>
                Of Note
              </h3>
              <div
                style={{
                  textIndent: '30px',
                  fontSize: '16px',
                  marginLeft: '15px',
                }}
              >
                <p>
                  This is a very basic upgrade calculator and will not be 100%
                  accurate. It doesnt account for market availability or ap/dp
                  brackets. Use your own judgement on what will be best for you.
                </p>
                <p>
                  Once you have input all of your gear values, submit and wait a
                  few moments for the values to come in. If the backend has been
                  inactive for a while the response will take a few extra
                  moments. Please be patient.
                </p>
              </div>
            </div>
          </Route>
        </Switch>
      </Col>
    </Row>
  );
};

export default UpgradeCalc;
