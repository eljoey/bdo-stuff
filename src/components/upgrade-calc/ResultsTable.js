import React from 'react';
import helpers from '../utils/helpers';
import numeral from 'numeral';
import { withStyles, makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import clsx from 'clsx';

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

const useStyles = makeStyles((theme) => ({
  whiteText: {
    color: 'white'
  },
  mobileView: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }
}));

const ResultsTable = ({ data, sortBy }) => {
  const classes = useStyles();
  const sortedData = data
    .filter((item) => item.perStatCost[sortBy] > 0)
    .sort((a, b) => a.perStatCost[sortBy] - b.perStatCost[sortBy]);
  let index = 0;

  return (
    <TableContainer>
      <Table stickyHeader size='small'>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Item Name</StyledTableCell>
            <StyledTableCell className={classes.mobileView} align='right'>Slot</StyledTableCell>
            <StyledTableCell align='right'>Enhance Level</StyledTableCell>
            <StyledTableCell className={classes.mobileView} align='right'>Price</StyledTableCell>
            <StyledTableCell className={classes.mobileView} align='right'>Stat Change</StyledTableCell>
            <StyledTableCell align='right'>Billion per Stat</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((item) => (
            <StyledTableRow key={index++}>
              <StyledTableCell style={{ color: helpers.getTextColor(item.grade) }}>{item.name}</StyledTableCell>
              <StyledTableCell className={clsx(classes.whiteText, classes.mobileView)} align='right'>{item.type}</StyledTableCell>
              <StyledTableCell className={classes.whiteText} align='right'>{item.enhLevel}</StyledTableCell>
              <StyledTableCell className={clsx(classes.whiteText, classes.mobileView)} align='right'>{numeral(item.price).format('($ 0.00 a)')}</StyledTableCell>
              <StyledTableCell className={clsx(classes.whiteText, classes.mobileView)} align='right'>{item.statChange[sortBy]}</StyledTableCell>
              <StyledTableCell className={classes.whiteText} align='right'>{numeral(item.perStatCost[sortBy]).format('00.00')}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultsTable;
