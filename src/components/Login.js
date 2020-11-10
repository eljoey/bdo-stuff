import React, { useState } from 'react';
import { Button, Grid, makeStyles, TextField, Typography, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import accountService from './services/account';

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

}));

const Login = () => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await accountService.login({ username, password });

        console.log(response);
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
                <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    className={classes.button}
                >
                    Login
                </Button>
                <Grid container>
                    <Grid item xs>
                    </Grid>
                    <Grid item className={classes.createAccount}>
                        <Link to="/create-account" variant="body2" className={classes.createAccount}>
                            Create Account
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default Login;
