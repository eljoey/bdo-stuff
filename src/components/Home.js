import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#404040',
    height: 'max-content',
    minWidth: '30%',
    margin: 'auto',
    padding: '25px',
    borderRadius: '5px',
    [theme.breakpoints.down('xs')]: {
      height: '90%',
      margin: '5px'
    }
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant='h4' align='center'>BDO-Stuff</Typography>
      <div>
        <Typography variant='h6'>Updates</Typography>
        <ul>
          <Typography component='li'>Nov 2020</Typography>
          <ul>
            <Typography component='li'>Add user creation</Typography>
          </ul>
          <ul>
            <Typography component='li'>Add alert creation</Typography>
            <ul>
              <Typography component='li'>Sign up with the email you wish to recieve your alerts at.</Typography>
            </ul>
            <ul>
              <Typography component='li'>After adding the alert you will recieve an email when it is triggered.</Typography>
            </ul>
            <ul>
              <Typography component='li'>To reactivate go to alerts page and activate
                (X means its currently inactive).</Typography>
            </ul>
          </ul>

        </ul>
      </div>
      <div>
        <Typography variant='h6'>Future Updates</Typography>
        <ul>
          <Typography component='li'>Add grind sheets to calculate $/hr and more data</Typography>
          <Typography component='li'>To be determined...</Typography>
        </ul>
      </div>
    </div>
  );
};

export default Home;
