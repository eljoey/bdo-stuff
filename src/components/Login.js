import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Alert from '@material-ui/lab/Alert';
import { Link, useHistory } from 'react-router-dom';
import accountService from './services/account';
import CloseIcon from '@material-ui/icons/Close';
import { Send } from '@material-ui/icons';

const CustomTextField = withStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'grey',
                borderWidth: 2,
            },
            '&:hover fieldset': {
                borderColor: '#3FA3C4',
            },
        },
        '& .MuiOutlinedInput-input': {
            color: 'white'
        },
        '& .MuiFormLabel-root': {
            color: 'white',
        },
    },
})(TextField);

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#404040',
        height: 'max-content',
        minWidth: '30%',
        margin: 'auto',
        padding: '25px',
        borderRadius: '5px',
        [theme.breakpoints.down('xs')]: {
            height: '90%',
            margin: '5px'
        }
    },
    form: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        textAlign: 'center',
    },
    button: {
        float: 'right',
        marginTop: '10px',
        color: 'white'
    },
    createAccount: {
        marginTop: theme.spacing(1),
        textDecoration: 'none',
        color: '#3FA3C4',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    error: {
        marginTop: theme.spacing(1)
    }
}));

const Login = ({ updateUser }) => {
    const history = useHistory();
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(false);
    const [open, setOpen] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setOpen(true);

        const response = await accountService.login({ username, password });

        if (response === 'Invalid Username or Password') {
            setAlert(true);
            return;
        }

        updateUser(response);
        history.push('/');

    };

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUsername(value);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    return (
        <div className={classes.root}>
            <Typography variant='h4' className={classes.title}>Log in to your account</Typography>

            <form onSubmit={handleSubmit} className={classes.form}>
                <CustomTextField
                    required
                    id='username'
                    margin='normal'
                    label='Username'
                    variant='outlined'
                    value={username}
                    onChange={handleUsernameChange}
                />
                <CustomTextField
                    required
                    id='password'
                    label='Password'
                    variant='outlined'
                    type='password'
                    value={password}
                    onChange={handlePasswordChange}
                />
                {alert && (
                    <Collapse in={open}>
                        <Alert
                            className={classes.error}
                            severity="error"
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpen(false);
                                        setAlert(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                        >
                            Invalid Username or password
                        </Alert>
                    </Collapse>
                )}
                <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    className={classes.button}
                    endIcon={<Send />}
                >
                    Login
                </Button>
                <Grid container>
                    <Grid item xs>
                    </Grid>
                    <Grid item className={classes.createAccount}>
                        <Link to="/account/create" variant="body2" className={classes.createAccount}>
                            Create Account
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default Login;
