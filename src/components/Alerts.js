import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormGroup, InputLabel, makeStyles, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, withStyles } from '@material-ui/core';
import accountService from './services/account';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import marketItemList from './assets/items';
import { Autocomplete } from '@material-ui/lab';


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
    root: {
        backgroundColor: '#404040',
        height: 'max-content',
        minWidth: '30%',
        margin: 'auto',
        padding: '25px',
        borderRadius: '5px',
    },
    title: {
        textAlign: 'center',
        marginBottom: '15px'
    },
    trash: {
        '&:hover': {
            cursor: 'pointer'
        },
    },
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
    formControl: {
        margin: theme.spacing(1),
        color: 'white'
    },
}));

const Alerts = ({ user }) => {
    const classes = useStyles();
    const [alerts, setAlerts] = useState([]);
    const [open, setOpen] = useState(false);
    const [itemId, setItemId] = useState(null);
    const [itemName, setItemName] = useState('');
    const [region, setRegion] = useState('na');
    const [price, setPrice] = useState('');
    const [direction, setDirection] = useState('less than or equal to');

    useEffect(() => {
        const getAlerts = async () => {
            const response = await accountService.getAlerts();

            setAlerts(response.alerts);
        };

        getAlerts();
    }, []);

    const handleDelete = async (id) => {
        await accountService.deleteAlert(id);

        setAlerts(prevState => {
            const filteredAlerts = prevState.filter(alert => id !== alert._id);
            return filteredAlerts;
        });
    };

    const handleDialogOpen = () => {
        setOpen(true);
    };

    const handleDialogClose = () => {
        setOpen(false);
    };

    const handleAlertFormChange = (e, value) => {
        setItemId(value.id);
        setItemName(value.name);
    };

    const handleDirectionChange = (e) => {
        setDirection(e.target.value);
    };

    const handleRegionChange = (e) => {
        setRegion(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleAlertSubmit = async () => {
        const alert = {
            itemId,
            name: itemName,
            price,
            direction,
            region
        };

        const response = await accountService.createAlert(alert);
        console.log(response);

        setAlerts(prevState => {
            return [...prevState, response];
        });
        setOpen(false);
        resetFormValues();
    };

    const resetFormValues = () => {
        setItemId(null);
        setItemName('');
        setPrice('');
    };

    const handleAlertActivation = async (alert) => {
        const updatedAlert = {
            ...alert,
            active: !alert.active
        };

        const response = await accountService.updateAlert(updatedAlert, alert._id);

        setAlerts(prevState => {
            // map through and replace alert with updated one 
            const updatedAlerts = prevState.map(obj => obj._id === alert._id ? response : obj);

            return updatedAlerts;
        });

    };

    return (
        <div className={classes.root}>
            <Typography variant='h4' className={classes.title} onClick={handleDialogOpen}>Alerts</Typography>
            <TableContainer component={Paper} className={classes.table} >
                <Table aria-label='market items' size='small'>
                    <TableHead>
                        <StyledTableRow className={classes.searchHeader}>
                            <StyledTableCell className={classes.tableCell}>
                                Item
                            </StyledTableCell>
                            <StyledTableCell className={classes.tableCell} align='right'>
                                Item Id
                            </StyledTableCell>
                            <StyledTableCell className={classes.tableCell} align='right'>
                                Target Price
                            </StyledTableCell>
                            <StyledTableCell className={classes.tableCell} align='right'>
                                Region
                            </StyledTableCell>
                            <StyledTableCell className={classes.tableCell} align='right'>
                                Status
                            </StyledTableCell>
                            <StyledTableCell className={classes.tableCell} align='right'>
                                Activate
                            </StyledTableCell>
                            <StyledTableCell className={classes.tableCell} align='right'>
                                Delete
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {alerts.map((alert, index) => (
                            <StyledTableRow className={classes.marketItem} key={index}>
                                <StyledTableCell className={classes.tableCell}>
                                    {alert.name}
                                </StyledTableCell>
                                <StyledTableCell align='right' className={classes.sumCount}>
                                    {alert.itemId}
                                </StyledTableCell>
                                <StyledTableCell align='right' className={classes.sumCount}>
                                    {alert.direction === 'less than or equal to' ? '≤' : '≥'} {`$${alert.price
                                        .toString()
                                        .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')}`}
                                </StyledTableCell>
                                <StyledTableCell align='right' className={classes.sumCount}>
                                    {alert.region}
                                </StyledTableCell>
                                <StyledTableCell align='right' className={classes.sumCount}>
                                    {alert.active ? 'active' : 'inactive'}
                                </StyledTableCell>
                                <StyledTableCell align='right' className={classes.sumCount}>
                                    {alert.active ? <Button onClick={() => handleAlertActivation(alert)}>Deactivate</Button> : <Button onClick={() => handleAlertActivation(alert)}>Activate</Button>}
                                </StyledTableCell>
                                <StyledTableCell align='right' className={classes.sumCount}>
                                    <DeleteForeverIcon className={classes.trash} onClick={() => handleDelete(alert._id)} />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog open={open} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Alert</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To add an alert fill out the form and submit. Once an alert is activated you will recieve an email notifying you of its activation.
                        The alert will then turn inactive.  To turn the alert back on come to this page and click on the activate button.  Alerts are checked every 30mins.
                    </DialogContentText>

                    <Autocomplete
                        id='alert-item-name-select'
                        options={marketItemList}
                        className={classes.option}
                        autoHighlight
                        getOptionLabel={(option) => option.name}
                        onChange={handleAlertFormChange}
                        renderOption={(option) => (
                            <>
                                {option.name} (#{option.id})
                            </>
                        )}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label='Item Name'
                            />
                        )}
                    />
                    <FormGroup row>
                        <FormControl className={classes.formControl}>
                            <InputLabel id='direction-label' className={classes.label}>Direction</InputLabel>
                            <Select
                                labelId='direction-label'
                                id='direction'
                                name='direction'
                                value={direction}
                                onChange={handleDirectionChange}
                                className={classes.select}
                            >
                                <MenuItem value='less than or equal to'>Less than or equal to</MenuItem>
                                <MenuItem value='greater than or equal to'>Greater than or euqal to</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} >
                            <TextField id='price' label='Price' type='number' value={price} onChange={handlePriceChange} />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel id='region-label' className={classes.label}>Region</InputLabel>
                            <Select
                                labelId='region-label'
                                id='region'
                                name='region'
                                value={region}
                                onChange={handleRegionChange}
                                className={classes.select}
                            >
                                <MenuItem value='na'>NA</MenuItem>
                                <MenuItem value='eu'>EU</MenuItem>
                            </Select>
                        </FormControl>
                    </FormGroup>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAlertSubmit} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Alerts;
