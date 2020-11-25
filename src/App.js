import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Menu from './components/menu/Menu';
import SiteMenu from './components/SiteMenu';
import Grid from '@material-ui/core/Grid';
import accountService from './components/services/account';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    height: '100%',
  },
  content: {
    color: 'white',
    minHeight: '100vh',
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(8),
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
  const [user, setUser] = useState(null);
  const [loggingIn, setLoggingIn] = useState(true);

  useEffect(() => {
    const login = async () => {
      const response = await accountService.getAccountInfo();
      setUser(response);
      setLoggingIn(false);
    };

    if (localStorage.getItem('token')) {
      login();
    } else {
      setLoggingIn(false);
    }
  }, []);

  const updateUser = (info) => {
    setUser(info);
  };

  const updateOpen = (info) => {
    setOpen(info);
  };

  const updateSelected = (info) => {
    setSelected(info);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar open={open} updateOpen={updateOpen} updateSelected={updateSelected} user={user} updateUser={updateUser} loggingIn={loggingIn} />
      <Menu open={open} updateOpen={updateOpen} selected={selected} updateSelected={updateSelected} user={user} />
      <Grid container spacing={0} className={classes.content}>
        <SiteMenu updateUser={updateUser} />
      </Grid>
    </div>
  );
}

export default App;
