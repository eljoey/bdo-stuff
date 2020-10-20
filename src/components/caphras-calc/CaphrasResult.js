import React, { useState, useEffect } from 'react';
import apiService from '../services/api';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Loading from '../Loading';
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '30%',
    margin: '25px auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '50%'
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '80%',
      margin: '20px',
    },
  },
  table: {
    margin: '15px'
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#3FA3C4',
    color: theme.palette.common.black,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16
    }
  },
  body: {
    fontSize: 14,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16
    }
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: '#808080',
    '&:nth-of-type(odd)': {
      backgroundColor: '#606060'
    }
  }
}))(TableRow);

const CaphrasResult = () => {
  const classes = useStyles();
  const location = useLocation();
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const { item, enhLevel, curLevel, desiredLevel, region } = queryString.parse(
    location.search
  );

  useEffect(() => {
    setLoading(true);
    const getResults = async () => {
      const resultsData = await apiService.getCaphrasResult(
        item,
        enhLevel,
        curLevel,
        desiredLevel,
        region
      );
      setResults(resultsData);
      setLoading(false);
    };
    getResults();
  }, [curLevel, desiredLevel, enhLevel, item, region]);

  if (loading) {
    return <Loading />;
  } else {
    let index = 0;

    return (
      <div className={classes.root}>
        <TableContainer component={Paper} className={classes.table}>
          <Table className={classes.caphrasTable} size='small'>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell colSpan={4} align='center'>Caphras</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell colSpan={3}>Available</StyledTableCell>
                <StyledTableCell align='right'>{results.caphrasAvailable}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell colSpan={3}>Needed</StyledTableCell>
                <StyledTableCell align='right'>{results.caphrasNeeded}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell colSpan={3}>Price</StyledTableCell>
                <StyledTableCell align='right'>
                  ${results.caphrasPrice
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell colSpan={3}>Total Cost:</StyledTableCell>
                <StyledTableCell align='right'>
                  ${results.totalCaphrasPrice
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')}
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer >
        <TableContainer component={Paper} className={classes.table}>
          <Table className={classes.statsTable} size='small'>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Stat</StyledTableCell>
                <StyledTableCell align='right'>Total(increase)</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {Object.entries(results.stats).map(([key, value]) => (
                <StyledTableRow key={index++}>
                  <StyledTableCell>{key}</StyledTableCell>
                  <StyledTableCell align='right'>{value}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
};

export default CaphrasResult;