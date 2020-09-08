import React from 'react';
import { Row, Col } from 'react-materialize';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import KutumOrNouverForm from './KutumOrNouverForm';
import KutumOrNouverResult from './KutumOrNouverResult';

const KutumOrNouver = () => {
  const { path } = useRouteMatch();
  return (
    <Row className='grey darken-3'>
      <Col s={5} l={4}>
        <KutumOrNouverForm />
      </Col>

      <Col s={7} l={8}>
        <Switch>
          <Route path={`${path}/result`}>
            <KutumOrNouverResult />
          </Route>
          <Route path={`${path}`}></Route>
        </Switch>
      </Col>
    </Row>
  );
};

export default KutumOrNouver;
