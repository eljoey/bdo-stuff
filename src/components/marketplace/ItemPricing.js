import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../services/api';
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
    display: 'flex',
    color: '#ffc107',
    padding: '12px',
  },
  tableCell: {
    padding: '12px',
  },
  orders: {
    marginRight: '10px',
    color: '#f44336',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  searchHeader: {
    backgroundColor: 'white',
    padding: '12px',
  },
  price: {
    color: 'white',
    padding: '12px',
    fontSize: '1rem',
  },
}));

const ItemPricing = () => {
  const classes = useStyles();
  const { itemId, enhanceLevel } = useParams();
  const [itemPricing, setItemPricing] = useState(null);
  const [itemName, setItemName] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const getItemPricing = async () => {
      const fetchedItemPricing = await apiService.getItemPricing(
        itemId,
        enhanceLevel
      );
      const fetchedItemName = await apiService.getItemInfo(itemId);

      const formattedItemInfo = fetchedItemPricing.marketConditionList.reverse();

      setItemName(fetchedItemName.detailList[0].name);
      setItemPricing(formattedItemInfo);
      setLoading(false);
    };

    getItemPricing();
  }, [enhanceLevel, itemId]);

  if (!loading) {
    return (
      <TableContainer component={Paper} className={classes.table}>
        <Table>
          <TableHead>
            <TableRow className={classes.searchHeader}>
              <TableCell className={classes.tableCell}>{itemName}</TableCell>
              <TableCell className={classes.tableCell} align='right'>
                Available
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itemPricing.map((item) => (
              <TableRow className={classes.marketItem} key={item.pricePerOne}>
                <TableCell className={classes.price}>
                  {`$${item.pricePerOne
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')}`}
                </TableCell>
                <TableCell className={classes.sumCount} align='right'>
                  <Typography component='p'> {item.sellCount}</Typography>
                  <Typography component='span' className={classes.orders}>
                    {item.buyCount === 0 ? `` : `(Orders: ${item.buyCount}) `}
                  </Typography>
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

export default ItemPricing;
