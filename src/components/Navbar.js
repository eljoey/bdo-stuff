import React, { useState } from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Menu, MenuItem } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { AccountCircle } from '@material-ui/icons';

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
  loginLink: {
    marginRight: theme.spacing(1)
  },
  username: {
    marginRight: theme.spacing(1)
  }
}));

const Navbar = ({ setSelected, open, setOpen, user }) => {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const accountMenuOpen = Boolean(anchorEl);

  const handleDrawerClick = () => {
    setOpen(!open);
  };

  const handleTitleClick = () => {
    history.push('/');
    setSelected('');
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderLogin = () => {
    return (
      <div className={classes.alignRight}>
        <Link component={RouterLink} to='/login' color='inherit'>
          <Typography
            component='p'
            color='inherit'
            noWrap
            className={classes.loginLink}
          >
            Login
          </Typography>
        </Link>
        <Link component={RouterLink} to='/account/create' color='inherit'>
          <Typography
            component='p'
            color='inherit'
            noWrap
            className={classes.loginLink}
          >
            Create Account
          </Typography>
        </Link>
      </div>
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
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
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
          {!user && renderLogin()}
          {user && renderUser()}
        </Toolbar>

      </AppBar>
    </>
  );
};

export default Navbar;
