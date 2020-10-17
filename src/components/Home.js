import React from 'react';
import { makeStyles } from '@material-ui/core';

// TODO: Grab the background image instead of website link

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Home = () => {
  const classes = useStyles();

  return <div className={classes.root}>Hi</div>;
};

export default Home;
