import React, { useEffect, useState } from 'react';
import { useParams, Link, useRouteMatch } from 'react-router-dom';
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
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
    },
  },
  sumCount: {
    color: '#ffc107',
    padding: '12px',
    [theme.breakpoints.down('xs')]: {
      padding: '20px',
    },
  },
  tableCell: {
    padding: '12px',
  },
  searchHeader: {
    backgroundColor: 'white',
    padding: '12px',
  },
}));

const ItemInfo = ({ setItemName }) => {
  const classes = useStyles();
  const { itemId } = useParams();
  const { url } = useRouteMatch();
  const [itemInfo, setItemInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const getItemInfo = async () => {
      const fetchedItemInfo = await apiService.getItemInfo(itemId);

      setItemInfo(fetchedItemInfo.detailList);
      setLoading(false);
    };

    getItemInfo();
  }, [itemId]);

  if (!loading) {
    setItemName(itemInfo[0].name);

    const accessoryCheck = (category, index) => {
      const names = {
        accessories: {
          0: '',
          1: 'PRI: ',
          2: 'DUO: ',
          3: 'TRI: ',
          4: 'TET: ',
          5: 'PEN: ',
        },
        others: {
          0: '',
          1: '+1 ',
          2: '+2 ',
          3: '+3 ',
          4: '+4 ',
          5: '+5 ',
        },
      };

      if (category === 20) {
        return names.accessories[index];
      } else {
        return names.others[index];
      }
    };

    const enhanceLevelTitle = {
      0: accessoryCheck(itemInfo[0].mainCategory, 0),
      1: accessoryCheck(itemInfo[0].mainCategory, 1),
      2: accessoryCheck(itemInfo[0].mainCategory, 2),
      3: accessoryCheck(itemInfo[0].mainCategory, 3),
      4: accessoryCheck(itemInfo[0].mainCategory, 4),
      5: accessoryCheck(itemInfo[0].mainCategory, 5),
      6: '+6 ',
      7: '+7',
      8: '+8 ',
      9: '+9',
      10: '+10 ',
      11: '+11 ',
      13: '+13 ',
      14: '+14 ',
      15: '+15 ',
      16: 'PRI: ',
      17: 'DUO: ',
      18: 'TRI: ',
      19: 'TET: ',
      20: 'PEN: ',
    };

    return (
      <TableContainer component={Paper} className={classes.table}>
        <Table aria-label='prices'>
          <TableHead>
            <TableRow className={classes.searchHeader}>
              <TableCell className={classes.tableCell}>
                {itemInfo[0].name}
              </TableCell>
              <TableCell align='right' className={classes.tableCell}>
                Available
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itemInfo.map((item, index) => (
              <TableRow className={classes.marketItem} key={index}>
                <TableCell className={classes.tableCell}>
                  <Typography
                    component={Link}
                    to={`${url}/${item.subKey}`}
                    className={classes.itemLink}
                    style={{ color: helpers.getTextColor(item.grade) }}
                  >
                    {`${enhanceLevelTitle[item.subKey]}${item.name}`}
                    {'  '}
                    <Typography
                      style={{ color: 'white' }}
                    >{`$${item.pricePerOne
                      .toString()
                      .replace(
                        /(\d)(?=(\d{3})+(?:\.\d+)?$)/g,
                        '$1,'
                      )}`}</Typography>
                  </Typography>
                </TableCell>
                <TableCell align='right' className={classes.sumCount}>
                  <Typography component='p'>{item.count}</Typography>
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

export default ItemInfo;
