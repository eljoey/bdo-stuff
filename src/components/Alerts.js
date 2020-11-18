import React, { useEffect, useState } from 'react';
import { Button, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import accountService from './services/account';
import itemInfo from './assets/items';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#404040',
        height: 'max-content',
        minWidth: '30%',
        margin: 'auto',
        padding: '25px',
        borderRadius: '5px',
    }
}));

const Alerts = ({ user }) => {
    const classes = useStyles();
    const [alerts, setalerts] = useState([]);

    useEffect(() => {
        const getAlerts = async () => {
            const response = await accountService.getAlerts();

            setalerts(response.alerts);
        };

        getAlerts();
    }, []);

    console.log(alerts);

    return (
        <TableContainer component={Paper} className={classes.table} >
            <Table aria-label='market items' size='small'>
                <TableHead>
                    <TableRow className={classes.searchHeader}>
                        <TableCell className={classes.tableCell}>
                            Item
                        </TableCell>
                        <TableCell className={classes.tableCell} align='right'>
                            Item Id
                        </TableCell>
                        <TableCell className={classes.tableCell} align='right'>
                            Target Price
                        </TableCell>
                        <TableCell className={classes.tableCell} align='right'>
                            Status
                        </TableCell>
                        <TableCell className={classes.tableCell} align='right'>
                            Activate
                        </TableCell>
                        <TableCell className={classes.tableCell} align='right'>
                            Delete
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {alerts.map((alert, index) => (
                        <TableRow className={classes.marketItem} key={index}>
                            <TableCell className={classes.tableCell}>
                                {itemInfo[alert.itemId]}
                            </TableCell>
                            <TableCell align='right' className={classes.sumCount}>
                                {alert.itemId}
                            </TableCell>
                            <TableCell align='right' className={classes.sumCount}>
                                {alert.direction === 'less than or equal to' ? '≤' : '≥'} {`$${alert.price
                                    .toString()
                                    .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')}`}
                            </TableCell>
                            <TableCell align='right' className={classes.sumCount}>
                                {alert.active ? 'active' : 'inactive'}
                            </TableCell>
                            <TableCell align='right' className={classes.sumCount}>
                                {alert.active ? '' : <Button>Activate</Button>}
                            </TableCell>
                            <TableCell align='right' className={classes.sumCount}>
                                <DeleteForeverIcon />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
};

export default Alerts;
