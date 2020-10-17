import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Menu from './components/menu/Menu';
import SiteMenu from './components/SiteMenu';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    height: '100%',
  },
  content: {
    color: 'white',
    marginTop: '60px',
    backgroundColor: '#121212',
    flexWrap: 'nowrap',
    [theme.breakpoints.down('xs')]: {
      marginTop: '55px',
    },
  },
}));

function App() {
  const classes = useStyles();
  const location = useLocation().pathname.split('/')[1];
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(location);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar open={open} setOpen={setOpen} setSelected={setSelected} />
      <Grid container spacing={0} className={classes.content}>
        <Menu open={open} selected={selected} setSelected={setSelected} />
        <SiteMenu />
      </Grid>
    </div>
  );
}

export default App;
