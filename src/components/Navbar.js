import React, { useState } from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { AccountCircle } from '@material-ui/icons';
import accountService from './services/account';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#424242',
    zIndex: theme.zIndex.drawer + 1,
    color: 'white'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  menuClose: {
    display: 'none',
  },
  alignRight: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: '0'
  },
  username: {
    marginRight: theme.spacing(1)
  },
  divider: {
    borderRight: '1px solid white',
    margin: '6px',
  }
}));

const Navbar = ({ updateSelected, open, updateOpen, user, updateUser, loggingIn }) => {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const accountMenuOpen = Boolean(anchorEl);

  const handleDrawerClick = () => {
    updateOpen(!open);
  };

  const handleTitleClick = () => {
    history.push('/');
    updateSelected('');
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (path) => {
    history.push(path);
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    updateUser(null);
    setAnchorEl(null);
    await accountService.logout();

    history.push('/');
  };

  const renderLogin = () => {
    return (
      <Grid className={classes.alignRight}>
        <Link component={RouterLink} to='/login' color='inherit'>
          <Typography
            component='p'
            color='inherit'
            noWrap
          >
            Login
          </Typography>
        </Link>
        <div className={classes.divider} />
        <Link component={RouterLink} to='/account/create' color='inherit'>
          <Typography
            component='p'
            color='inherit'
            noWrap
          >
            Create Account
          </Typography>
        </Link>
      </Grid>
    );
  };

  const renderUser = () => {
    return (
      <div className={classes.alignRight}>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <Typography
            component='p'
            color='inherit'
            noWrap
            className={classes.username}
          >
            {user.username}
          </Typography>
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={accountMenuOpen}
          onClose={handleClose}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    );
  };

  return (
    <>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge='start'
            className={clsx(classes.menuButton, open && classes.menuClose)}
            color='inherit'
            aria-label='menu'
            onClick={handleDrawerClick}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerClick}
            className={clsx(classes.menuButton, !open && classes.menuClose)}
          >
            <ChevronLeftIcon />
          </IconButton>
          <Typography
            component='h1'
            variant='h6'
            color='inherit'
            noWrap
            className={classes.title}
            onClick={handleTitleClick}
          >
            BDO-Stuff
          </Typography>
          {loggingIn ? null : user ? renderUser() : renderLogin()}
        </Toolbar>

      </AppBar>
    </>
  );
};

export default Navbar;
