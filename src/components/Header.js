import React from 'react';
import { Navbar, Icon } from 'react-materialize';
import { useLocation, Link } from 'react-router-dom';

const NewHeader = () => {
  // Gets the name of main page (ex. gets 'marketplace' from location '/marketplace/list/1-1')
  const location = useLocation().pathname.split('/')[1];

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
          className={location === 'marketplace' ? 'grey darken-3' : ''}
        >
          Marketplace
        </Link>

        <Link
          to='/caphras-calculator'
          className={location === 'caphras-calculator' ? 'grey darken-3' : ''}
        >
          Caphras Calculator
        </Link>
      </Navbar>
    </div>
  );
};

export default NewHeader;
