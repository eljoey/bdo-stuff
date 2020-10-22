import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import apiService from '../services/api';
import { makeStyles, withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import SearchBar from 'material-ui-search-bar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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

    [theme.breakpoints.down('xs')]: {
      margin: '0 5px',
    },
  },
  rightContent: {
    display: 'flex',
    flexDirection: 'row',
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
  backBtn: {
    color: 'white',
    '&:hover': {
      cursor: 'pointer',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

const RegionSwitch = withStyles({
  switchBase: {
    color: '#3FA3C4',
    '&$checked': {
      color: '#3FA3C4',
    },
    '&$checked + $track': {
      backgroundColor: '#3FA3C4',
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

  const handleBackButton = () => {
    if (history.location.pathname === '/marketplace') return;

    history.goBack();
  };

  return (
    <Paper square className={classes.root}>
      <ArrowBackIcon onClick={handleBackButton} className={classes.backBtn} />

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
