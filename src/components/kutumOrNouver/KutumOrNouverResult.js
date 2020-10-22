import React, { useState, useEffect } from 'react';
import apiService from '../services/api';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Loading from '../Loading';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#404040',
    height: 'max-content',
    minWidth: '30%',
    margin: 'auto',
    padding: '25px',
    borderRadius: '5px',
  },
  results: {
    margin: '25px 0'
  },
  buttonDiv: {
    textAlign: 'center'
  },
  button: {
    color: 'white'
  }
}));

const KutumOrNouverResult = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const {
    baseAp,
    kutumLvl,
    kutumCaphra,
    nouverLvl,
    nouverCaphra,
  } = queryString.parse(location.search);

  useEffect(() => {
    setLoading(true);
    const getResults = async () => {
      const resultsData = await apiService.getKutumOrNouver(
        baseAp,
        kutumLvl,
        kutumCaphra,
        nouverLvl,
        nouverCaphra
      );
      setResults(resultsData);
      setLoading(false);
    };
    getResults();
  }, [baseAp, kutumCaphra, kutumLvl, nouverCaphra, nouverLvl]);

  const handleButtonClick = () => {
    history.push('/kutum-or-nouver');
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className={classes.root}>
        <Typography variant='h4' align='center'>Results:</Typography>
        <div className={classes.results}>
          <Typography align='center'>Your best offhand is: </Typography>
          <Typography variant='h5' align='center' color='primary'>{results.bestOffhand}</Typography>
          <Typography align='center'>Effective Ap difference is: </Typography>
          <Typography variant='h5' align='center' color='primary'>{results.effectiveApDiff}</Typography>
        </div>
        <div className={classes.buttonDiv}>
          <Button
            color='primary'
            variant='contained'
            className={classes.button}
            onClick={handleButtonClick}
          >
            Try New Values
          </Button>
        </div>
      </div>
    );
  }
};

export default KutumOrNouverResult;


// <div
// className='center-align'
// style={{
//   height: '95vh',
//   border: 'solid 1px white',
//   marginTop: '8px',
//   marginBottom: '8px',
//   backgroundColor: '#616161',
//   paddingTop: '55px',
// }}
// >
// <div className='center-align'>
//   <h2>Your best Offhand Is:</h2>
//   <p className='teal-text lighten-1' style={{ fontSize: '32px' }}>
//     {results.bestOffhand}
//   </p>
// </div>
// <div>
//   <h5>Effective Ap Difference: </h5>
//   <p className='teal-text lighten-1' style={{ fontSize: '20px' }}>
//     {results.effectiveApDiff}
//   </p>
// </div>
// </div>