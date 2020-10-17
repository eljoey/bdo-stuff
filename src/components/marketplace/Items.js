import React, { useEffect, useState } from 'react';
import { useParams, Link, useRouteMatch } from 'react-router-dom';
import apiService from '../services/api';
import mpList from '../assets/mpTabs';
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
    fontSize: '1rem',
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

const Items = () => {
  const classes = useStyles();
  const { main, sub } = useParams();
  const { url } = useRouteMatch();
  const [itemList, setItemList] = useState(null);
  const [loading, setLoading] = useState(true);
  const findMpTabIndex = mpList.indexOf(
    mpList.find((e) => e.tab === Number(main))
  );

  useEffect(() => {
    setLoading(true);

    const fetchItemList = async () => {
      const fetchedItemList = await apiService.getItemList(main, sub);

      const sortedItemInfo = fetchedItemList.marketList.sort((a, b) =>
        a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })
      );
      setItemList(sortedItemInfo);
      setLoading(false);
    };
    fetchItemList();
  }, [main, sub]);


  if (!loading) {
    return (
      <TableContainer component={Paper} className={classes.table}>
        <Table aria-label='market items'>
          <TableHead>
            <TableRow className={classes.searchHeader}>
              <TableCell className={classes.tableCell}>
                {mpList[findMpTabIndex].subTabs[Number(sub) - 1].title}
              </TableCell>
              <TableCell className={classes.tableCell} align='right'>
                Available
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itemList.map((item) => (
              <TableRow className={classes.marketItem} key={item.mainKey}>
                <TableCell className={classes.tableCell}>
                  <Link
                    to={`${url}/${item.mainKey}`}
                    style={{ color: helpers.getTextColor(item.grade) }}
                    className={classes.itemLink}
                  >
                    {item.name}
                  </Link>
                </TableCell>

                <TableCell align='right' className={classes.sumCount}>
                  <Typography component='p'>{item.sumCount}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else {
    return <Loading />;
  }
};

export default Items;
