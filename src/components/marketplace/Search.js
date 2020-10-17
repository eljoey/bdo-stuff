import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiService from '../services/api';
import helpers from '../utils/helpers';
import Loading from '../Loading';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  table: {
    flexGrow: 1,
    borderRadius: 0,
    height: '100%',
    backgroundColor: '#404040',
    borderRight: '1px solid white',
  },
  marketItem: {
    color: 'white',
    '&:hover': {
      backgroundColor: '#505050',
    },
  },
  itemLink: {
    textDecoration: 'none',
  },
  sumCount: {
    color: '#ffc107',
    padding: '12px',
  },
  tableCell: {
    padding: '12px',
  },
  searchHeader: {
    backgroundColor: 'white',
    padding: '12px',
  },
}));

const Search = () => {
  const classes = useStyles();
  const { searchTerm } = useParams();
  const [searchResults, setSearchResults] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getSearchResult = async () => {
      const fetchedSearch = await apiService.getItemSearch(searchTerm);

      setSearchResults(fetchedSearch.list || []);
      setLoading(false);
    };

    getSearchResult();
  }, [searchTerm]);

  if (!loading && searchResults.length > 0) {
    return (
      <TableContainer component={Paper} className={classes.table}>
        <Table aria-label='search results'>
          <TableHead>
            <TableRow className={classes.searchHeader}>
              <TableCell className={classes.tableCell}>
                {`'${searchTerm}' Results`}
              </TableCell>
              <TableCell className={classes.tableCell} align='right'>
                In Stock
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchResults.map((item) => (
              <TableRow className={classes.marketItem}>
                <TableCell className={classes.tableCell}>
                  <Link
                    to={`/marketplace/list/search-term/${item.mainKey}`}
                    style={{ color: helpers.getTextColor(item.grade) }}
                    className={classes.itemLink}
                  >
                    {item.name}
                  </Link>
                </TableCell>
                <TableCell className={classes.sumCount} align='right'>
                  <Typography>{item.sumCount}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else if (!loading && searchResults.length === 0) {
    return (
      <TableContainer component={Paper} className={classes.table}>
        <Table aria-label='search results'>
          <TableHead>
            <TableRow className={classes.searchHeader}>
              <TableCell className={classes.tableCell}>
                <Typography>{`No Results for '${searchTerm}' found`}</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    );
  } else {
    return <Loading />;
  }
};

export default Search;
