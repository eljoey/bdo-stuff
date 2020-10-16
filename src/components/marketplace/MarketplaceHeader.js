import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, NavItem, TextInput, Icon } from 'react-materialize';
import apiService from '../services/api';
import {
  AppBar,
  fade,
  FormGroup,
  Grid,
  InputBase,
  makeStyles,
  Paper,
  Toolbar,
  Typography,
  withStyles,
  Switch,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SearchBar from 'material-ui-search-bar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
    margin: '0 20px',
    padding: '10px',
    backgroundColor: '#404040',
    height: '60px',
    border: '1px solid white',
  },
  rightContent: {
    display: 'flex',
    flexDirection: 'row',
    width: '75%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  searchBar: {
    width: '70%',
    backgroundColor: 'grey',
  },
  regionSwitch: {
    margin: '0 15px',
    alignItems: 'center',
    spacing: 1,
  },
}));

const RegionSwitch = withStyles({
  switchBase: {
    color: 'white',
    '&$checked': {
      color: 'white',
    },
    '&$checked + $track': {
      backgroundColor: '#ffac33',
    },
  },
  checked: {},
  track: {},
})(Switch);

const MarketplaceHeader = () => {
  const classes = useStyles();
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');
  const [region, setRegion] = useState(
    JSON.parse(localStorage.getItem('region')) || 'na'
  );

  useEffect(() => {
    localStorage.setItem('region', JSON.stringify(region));
    apiService.setRegionLocation(region);
  }, [region]);

  const handleChange = (input) => {
    setSearchValue(input);
  };
  console.log(searchValue);

  const handleSubmit = () => {
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
    <Paper square className={classes.root}>
      <div>TITLE OF SHIT</div>

      <div className={classes.rightContent}>
        <SearchBar
          value={searchValue}
          onChange={(text) => handleChange(text)}
          onRequestSearch={handleSubmit}
          className={classes.searchBar}
        />
        <Typography component='div'>
          <Grid component='label' container className={classes.regionSwitch}>
            <Grid item>NA</Grid>
            <Grid item>
              <RegionSwitch
                checked={region === 'na' ? false : true}
                onChange={handleRegionChange}
                name={region}
              />
            </Grid>
            <Grid item>EU</Grid>
          </Grid>
        </Typography>
      </div>
    </Paper>
  );
};

export default MarketplaceHeader;

{
  /* <Navbar
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
    </Navbar> */
}
