import { makeStyles } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '5px',
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  );
};

export default Loading;
