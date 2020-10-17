import React from 'react';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import MainList from './MainList';
import MiscList from './MiscList';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: 'relative',
    overflowX: 'hidden',
    whiteSpace: 'noWrap',
    backgroundColor: '#505050',
    color: 'white',
    width: drawerWidth,
    height: '100%',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('xs')]: {
      position: 'fixed',
      marginTop: '55px',
      width: '100%',
      height: '100vh',
    },
  },
  drawerPaperClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      width: '0',
    },
  },
}));

const Menu = ({ open, selected, setSelected }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant='permanent'
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <MainList selected={selected} setSelected={setSelected} />
      <Divider />
      <MiscList />
    </Drawer>
  );
};

export default Menu;
