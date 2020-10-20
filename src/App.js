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
    overflowY: 'scroll',
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(8),
    padding: '25px',
    backgroundColor: '#121212',
    flexWrap: 'nowrap',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(7),
      marginLeft: 0,
      padding: '0'
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
      <Menu open={open} setOpen={setOpen} selected={selected} setSelected={setSelected} />
      <Grid container spacing={0} className={classes.content}>
        <SiteMenu />
      </Grid>
    </div>
  );
}

export default App;
