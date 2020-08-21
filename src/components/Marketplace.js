import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Items from './Items';
import List from './List';
import ItemInfo from './ItemInfo';
import ItemPricing from './ItemPricing';
import { Col, Row } from 'react-materialize';

const Marketplace = () => {
  let { path, url } = useRouteMatch();

  return (
    <Row className='grey darken-3'>
      <Col s={4} l={3}>
        <List url={url} />
      </Col>

      <Col s={8} l={9}>
        <Switch>
          <Route path={`${path}/list/:main-:sub/:itemId/:enhanceLevel`}>
            <ItemPricing />
          </Route>
          <Route path={`${path}/list/:main-:sub/:itemId`}>
            <ItemInfo />
          </Route>
          <Route path={`${path}/list/:main-:sub`}>
            <Items className='col s8' />
          </Route>
          <Route path={path}>THIS IS THE DEFAULT PAGE</Route>
        </Switch>
      </Col>
    </Row>
  );
};

export default Marketplace;
