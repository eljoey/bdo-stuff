import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, NavItem, TextInput, Icon } from 'react-materialize';

const MarketplaceHeader = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');

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

  return (
    <Navbar
      alignLinks='right'
      id='nav-wrapper'
      brand={
        <i
          onClick={() => history.goBack()}
          className='material-icons'
          style={{ cursor: 'pointer', paddingLeft: '5px' }}
        >
          keyboard_arrow_left
        </i>
      }
      style={{
        backgroundColor: '#616161',
        border: 'white .5px solid',
        marginTop: '5px',
      }}
    >
      <Icon>search</Icon>
      <NavItem>
        <form onSubmit={handleSubmit}>
          <TextInput
            placeholder='Search'
            value={searchValue}
            onChange={handleChange}
          ></TextInput>
        </form>
      </NavItem>
    </Navbar>
  );
};

export default MarketplaceHeader;
