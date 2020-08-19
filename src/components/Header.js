import React from 'react';
import { Navbar, Icon } from 'react-materialize';
import { useLocation, Link } from 'react-router-dom';

const NewHeader = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar
        alignLinks='right'
        brand={
          <Link to='/' className='brand-logo'>
            BDO-Stuff
          </Link>
        }
        centerChildren
        id='mobile-nav'
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: false,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
        className='black'
      >
        <Link
          to='/marketplace'
          className={
            location.pathname === '/marketplace' ? 'grey darken-3' : ''
          }
        >
          Marketplace
        </Link>

        <Link
          to='/caphras-calculator'
          className={
            location.pathname === '/caphras-calculator' ? 'grey darken-3' : ''
          }
        >
          Caphras Calculator
        </Link>
      </Navbar>
    </div>
  );
};

export default NewHeader;
