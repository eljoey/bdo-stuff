import React, { useState } from 'react';
import { Button, makeStyles, TextField, Typography, withStyles } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';
import accountService from './services/account';
import CloseIcon from '@material-ui/icons/Close';

const CustomTextField = withStyles({
    root: {
        '& .MuiInput-root': {
            '& fieldset': {
                borderColor: 'grey',
                borderWidth: 2,
            },
            '&:hover fieldset': {
                borderColor: '#3FA3C4',
            },
        },
        '& .MuiInput-input': {
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
    error: {
        marginTop: theme.spacing(1)
    }
}));

const Login = ({ setUser }) => {
    const history = useHistory();
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState(false);
    const [open, setOpen] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // resets alert window
        setOpen(true);

        // validation
        if (password !== confirmPassword) {
            setAlert(true);
            setErrorMessage('Passwords must match');
            return;
        }
        if (username.length < 5) {
            setAlert(true);
            setErrorMessage('Username must be atleast 5 characters');
            return;
        }
        if (password.length < 7) {
            setAlert(true);
            setErrorMessage('Password must be atleast 7 characters');
            return;
        }


        const response = await accountService.createAccount({ username, password, email });

        // error check
        if (response.error) {
            const usernameTaken = response.error.includes('expected `username` to be unique');
            const emailTaken = response.error.includes('expected `email` to be unique');
            if (usernameTaken && emailTaken) {
                setAlert(true);
                setErrorMessage('Username and email are already in use');
                return;
            }
            if (usernameTaken) {
                setAlert(true);
                setErrorMessage('Username already in use');
                return;
            }
            if (emailTaken) {
                setAlert(true);
                setErrorMessage('Email already in use');
                return;
            }
        }

        // Successful creation

        setUser(response.userInfo);
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

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
    };

    return (
        <div className={classes.root}>
            <Typography variant='h4' className={classes.title}>Create your account</Typography>

            <form onSubmit={handleSubmit} className={classes.form}>
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
                            {errorMessage}
                        </Alert>
                    </Collapse>
                )}
                <CustomTextField
                    required
                    id='username'
                    margin='normal'
                    label='Username'
                    value={username}
                    onChange={handleUsernameChange}
                />
                <CustomTextField
                    required
                    id='password'
                    label='Password'
                    type='password'
                    value={password}
                    onChange={handlePasswordChange}
                />
                <CustomTextField
                    required
                    id='confirmPassword'
                    label='Confirm Password'
                    type='password'
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                />
                <CustomTextField
                    required
                    id='email'
                    label='Email'
                    value={email}
                    onChange={handleEmailChange}
                />

                <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    className={classes.button}
                >
                    Login
                </Button>
            </form>
        </div>
    );
};

export default Login;