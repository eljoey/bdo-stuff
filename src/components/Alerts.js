import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import accountService from './services/account';
import itemInfo from './assets/items';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#404040',
        height: 'max-content',
        minWidth: '30%',
        margin: 'auto',
        padding: '25px',
        borderRadius: '5px',
    },
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
        <div className={classes.root}>
            <div>{alerts && alerts.map(alert => <div key={alert._id}>{alert.itemId}: {itemInfo[alert.itemId]}</div>)}</div>
        </div>
    );
};

export default Alerts;
