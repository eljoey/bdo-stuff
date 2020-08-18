import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from 'mdbreact';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [toggled, setToggled] = useState(false);

  const toggleCollapse = () => {
    setToggled(toggled === true ? false : true);
  };

  return (
    <MDBNavbar color='unique-color-dark' expand='md' dark>
      <MDBNavbarBrand>
        <strong className='white-text'>BDO-Stuff</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id='navbarCollapse3' isOpen={toggled} navbar>
        <MDBNavbarNav style={{ marginLeft: 'auto' }} left>
          <MDBNavItem active={location.pathname === '/'}>
            <MDBNavLink to='/'>Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem active={location.pathname === '/marketplace'}>
            <MDBNavLink to='/marketplace'>Marketplace</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem active={location.pathname === '/caphras-calculator'}>
            <MDBNavLink to='/caphras-calculator'>Caphras Calculator</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
}

export default Header;