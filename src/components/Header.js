import React from 'react';
import { Navbar, Icon, Dropdown } from 'react-materialize';
import { useLocation, Link } from 'react-router-dom';
import './header.css';
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
        <Link
          to='/upgrade-calculator'
          className={location === 'upgrade-calculator' ? 'grey darken-3' : ''}
        >
          Upgrade Calculator
        </Link>
        <Dropdown
          id='Dropdown_6'
          options={{
            alignment: 'left',
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            container: null,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 250,
          }}
          trigger={
            <a href='#!'>
              Misc. Tools <Icon right>arrow_drop_down</Icon>
            </a>
          }
        >
          <Link to='/kutum-or-nouver' className='grey darken-3 linkHover'>
            Kutum or Nouver
          </Link>
          <a
            href='https://github.com/eljoey/BDO-Api-Helper'
            className='grey darken-3 linkHover'
          >
            Marketplace Api
          </a>
        </Dropdown>
      </Navbar>
    </div>
  );
};

export default NewHeader;
