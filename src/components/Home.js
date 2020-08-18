import React from 'react';
import { MDBMask, MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import './home.css';

const Home = () => {
  return (
    <div className='bg'>
      <MDBMask className='d-flex justify-content-center align-items-center gradient'>
        <MDBContainer className='px-md-3 px-sm-0'>
          <MDBRow>
            <MDBCol md='12' className='mb-4 white-text text-center'>
              <h3 className='display-3 font-weight-bold mb-0 pt-md-5'>
                BDO-Stuff{' '}
              </h3>
              <hr className='hr-light my-4 w-75' />
              <h4 className='subtext-header mt-2 mb-4'>
                Your place for random bdo tools
              </h4>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBMask>
    </div>
  );
};

export default Home;
