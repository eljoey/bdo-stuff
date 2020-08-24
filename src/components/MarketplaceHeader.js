import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, NavItem, TextInput, Icon, Switch } from 'react-materialize';
import apiService from './services/api';

const MarketplaceHeader = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');
  const [region, setRegion] = useState(
    JSON.parse(localStorage.getItem('region')) || 'na'
  );

  useEffect(() => {
    localStorage.setItem('region', JSON.stringify(region));
    apiService.setRegionLocation(region);
  }, [region]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue('');

    const regex = / /gi;
    const formatValue = searchValue.replace(regex, '+');

    history.push(`/marketplace/search/${formatValue}`);
  };

  const handleRegionChange = () => {
    setRegion(region === 'na' ? 'eu' : 'na');
    history.go(0);
  };

  return (
    <Navbar
      alignLinks='right'
      id='nav-wrapper'
      brand={
        <i
          onClick={() => history.goBack()}
          className='material-icons brand-logo'
          style={{ cursor: 'pointer', paddingLeft: '5px' }}
        >
          keyboard_arrow_left
        </i>
      }
      style={{
        backgroundColor: '#616161',
        border: 'white .5px solid',
        marginTop: '8px',
      }}
      className=' hide-on-med-and-down'
    >
      <Icon>search</Icon>
      <NavItem>
        <form onSubmit={handleSubmit}>
          <TextInput
            placeholder='Search'
            value={searchValue}
            style={{
              color: 'white',
              padding: '1px',
            }}
            onChange={handleChange}
          ></TextInput>
        </form>
      </NavItem>
      <NavItem>
        <Switch
          offLabel='NA'
          onChange={handleRegionChange}
          onLabel='EU'
          checked={region === 'na' ? false : true}
        />
      </NavItem>
    </Navbar>
  );
};

export default MarketplaceHeader;
