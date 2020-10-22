import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

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
}));

const Navbar = ({ setSelected, open, setOpen }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleDrawerClick = () => {
    setOpen(!open);
  };

  const handleTitleClick = () => {
    history.push('/');
    setSelected('');
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
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
