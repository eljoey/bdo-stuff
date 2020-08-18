import React from 'react';
import { Row, Col } from 'react-materialize';
import './Home.css';

// TODO: Grab the background image instead of website link

const Home = () => {
  return (
    <div className='bg '>
      <div className='gradient valign-wrapper'>
        <div className='container '>
          <Row s={12}>
            <Col s={12} className='center-align valign-center '>
              <h3 className=''>BDO-Stuff </h3>
              <div className='divider black' />
              <h4 className='subtext-header mt-2 mb-4 '>
                Your place for random bdo stuff.
              </h4>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;
