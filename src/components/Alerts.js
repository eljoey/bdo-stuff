import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import accountService from './services/account';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import marketItemList from './assets/items';
import { Alert, Autocomplete } from '@material-ui/lab';
import numeral from 'numeral';
import Loading from './Loading';

// TODO: IMPLEMENT REACT-WINDOW FOR NON SLOW AUTOCOMPLETE

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#3FA3C4',
        color: theme.palette.common.black,
        [theme.breakpoints.down('xs')]: {
            fontSize: 14
        }
    },
    body: {
        fontSize: 16,
        [theme.breakpoints.down('xs')]: {
            fontSize: 14
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
        margin: '25px auto',
        padding: '25px',
        borderRadius: '5px',
        [theme.breakpoints.down('xs')]: {
            margin: 'auto 5px',
            padding: '25px 0 0 0'
        },
    },
    title: {
        textAlign: 'center',
    },
    trash: {
        '&:hover': {
            cursor: 'pointer'
        },
        color: 'black',
    },
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
    formControl: {
        marginRight: theme.spacing(1),
        flexGrow: 1,
        color: 'white',
        '&:last-child': { marginRight: 0 }
    },
    fab: {
        float: 'right',
        marginTop: -40,
        marginBottom: theme.spacing(2),
    },
    table: {
        border: '1px solid white',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        }
    },
    activateButton: {
        color: 'black',
    },
    mobileView: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    noAlerts: {
        margin: '25px'
    },
}));

const Alerts = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [alerts, setAlerts] = useState([]);
    const [open, setOpen] = useState(false);
    const [itemId, setItemId] = useState(null);
    const [itemName, setItemName] = useState('');
    const [region, setRegion] = useState('na');
    const [price, setPrice] = useState('');
    const [direction, setDirection] = useState('less than or equal to');
    const [formAlert, setFormAlert] = useState(false);
    const [formAlertOpen, setFormAlertOpen] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');



    useEffect(() => {
        setLoading(true);
        const getAlerts = async () => {
            const response = await accountService.getAlerts();
            setLoading(false);
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
        setFormAlertOpen(true);

        // Validation
        if (!itemName) {
            setFormAlert(true);
            setErrorMessage('"Item Name" is required');
            return;
        }
        if (!price) {
            setFormAlert(true);
            setErrorMessage('Valid "Price" is required');
            return;
        }


        const alert = {
            itemId,
            name: itemName,
            price,
            direction,
            region
        };

        const response = await accountService.createAlert(alert);

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

    if (!loading) {
        return (
            <div className={classes.root}>
                <Typography variant='h4' className={classes.title} >Alerts</Typography>
                <Fab color="primary" aria-label="add" className={classes.fab} size='small' onClick={handleDialogOpen}>
                    <AddIcon />
                </Fab>
                {alerts.length === 0 ?
                    <Typography className={classes.noAlerts}> You currently have no alerts.  To start adding some click on the '+'</Typography>
                    :
                    <TableContainer component={Paper} className={classes.table} >
                        <Table aria-label='market items' >
                            <TableHead>
                                <StyledTableRow className={classes.searchHeader}>
                                    <StyledTableCell >
                                        Item
                                </StyledTableCell>
                                    <StyledTableCell className={classes.mobileView} align='center'>
                                        Item Id
                                </StyledTableCell>
                                    <StyledTableCell align='center'>
                                        Target Price
                                </StyledTableCell>
                                    <StyledTableCell className={classes.mobileView} align='center'>
                                        Region
                                </StyledTableCell>
                                    <StyledTableCell align='center'>
                                        Status
                                </StyledTableCell>
                                    <StyledTableCell align='center'>
                                        Delete
                                </StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {alerts.map((alert, index) => (
                                    <StyledTableRow className={classes.marketItem} key={index}>
                                        <StyledTableCell >
                                            {alert.name}
                                        </StyledTableCell>
                                        <StyledTableCell align='center' className={classes.mobileView}>
                                            {alert.itemId}
                                        </StyledTableCell>
                                        <StyledTableCell align='center' >
                                            {alert.direction === 'less than or equal to' ? '≤' : '≥'} {numeral(alert.price).format('$0.00a')}
                                        </StyledTableCell>
                                        <StyledTableCell align='center' className={classes.mobileView}>
                                            {alert.region}
                                        </StyledTableCell>
                                        <StyledTableCell align='center' >
                                            {alert.active ? <IconButton title='Currently Active' onClick={() => handleAlertActivation(alert)}><CheckIcon className={classes.activateButton} /></IconButton> : <IconButton title='Currently Inactive' onClick={() => handleAlertActivation(alert)}><CloseIcon className={classes.activateButton} /></IconButton>}
                                        </StyledTableCell>
                                        <StyledTableCell align='center' >
                                            <IconButton title='Delete Alert' className={classes.trash} onClick={() => handleDelete(alert._id)}><DeleteForeverIcon /></IconButton>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>}
                <Dialog open={open} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add Alert</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To add an alert fill out the form and submit. Once an alert is activated you will recieve an email notifying you of its activation.
                            The alert will then turn inactive to prevent excessive emailing.  To turn the alert back on come to this page and click on the activate button.  <b>Alerts are checked every 30mins</b>.
                        </DialogContentText>
                        {formAlert && (
                            <Collapse in={formAlertOpen}>
                                <Alert
                                    className={classes.error}
                                    severity="error"
                                    action={
                                        <IconButton
                                            aria-label="close"
                                            color="inherit"

                                            onClick={() => {
                                                setFormAlertOpen(false);
                                                setFormAlert(false);
                                            }}
                                        >
                                            <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    }
                                >
                                    {errorMessage}
                                </Alert>
                            </Collapse>
                        )}
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
                                <TextField id='price' label='Price' type='number' value={price} onChange={handlePriceChange} required />
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
    } else {
        return <Loading />;
    }

};

export default Alerts;
