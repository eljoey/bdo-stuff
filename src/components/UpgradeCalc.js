import React from 'react';
import { Row, Col } from 'react-materialize';
import UpgradeForm from './UpgradeForm';

const UpgradeCalc = () => {
  return (
    <Row className='grey darken-3'>
      <Col s={4}>
        <UpgradeForm />
      </Col>
    </Row>
  );
};

export default UpgradeCalc;
