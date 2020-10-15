import React, { useState } from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemLink from './hooks/ListItemLink';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Storefront from '@material-ui/icons/Storefront';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AddShoppingCart, GitHub, Home, Opacity } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    backgroundColor: '#121212',
  },
  appBar: {
    backgroundColor: '#424242',
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuClose: {
    display: 'none',
  },
  whiteColor: {
    color: 'white',
  },
  drawerPaper: {
    position: 'relative',
    overflowX: 'hidden',
    whiteSpace: 'noWrap',
    backgroundColor: '#505050',
    color: 'white',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(8),
  },
  drawerSpacing: {
    ...theme.mixins.toolbar,
  },
  title: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  linkSelected: {
    color: '#3FA3C4',
  },
}));

const NewHeader = () => {
  const history = useHistory();
  const location = useLocation().pathname.split('/')[1];
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(location);

  const handleDrawerClick = () => {
    setOpen(!open);
  };

  const handleTitleClick = () => {
    history.push('/');
    setSelected('');
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='absolute' className={classes.appBar}>
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
      <Drawer
        variant='permanent'
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.drawerSpacing} />
        <List>
          <ListItemLink
            to=''
            icon={
              <Home
                className={clsx(
                  classes.whiteColor,
                  selected === '' && classes.linkSelected
                )}
              />
            }
            primary='Home'
            isSelected={selected === ''}
            setSelected={setSelected}
          />
          <ListItemLink
            to='marketplace'
            icon={
              <Storefront
                className={clsx(
                  classes.whiteColor,
                  selected === 'marketplace' && classes.linkSelected
                )}
              />
            }
            primary='Marketplace'
            isSelected={selected === 'marketplace'}
            setSelected={setSelected}
          />
          <ListItemLink
            to='caphras-calculator'
            icon={
              <Opacity
                className={clsx(
                  classes.whiteColor,
                  selected === 'caphras-calculator' && classes.linkSelected
                )}
              />
            }
            primary='Caphras Calculator'
            isSelected={selected === 'caphras-calculator'}
            setSelected={setSelected}
          />
          <ListItemLink
            to='upgrade-calculator'
            icon={
              <AddShoppingCart
                className={clsx(
                  classes.whiteColor,
                  selected === 'upgrade-calculator' && classes.linkSelected
                )}
              />
            }
            primary='Upgrade Calculator'
            isSelected={selected === 'upgrade-calculator'}
            setSelected={setSelected}
          />
        </List>
        <List>
          <Divider />
          <ListSubheader className={classes.whiteColor} inset>
            Misc.
          </ListSubheader>
          <ListItem
            button
            component='a'
            target='_blank'
            href='https://github.com/eljoey/BDO-Api-Helper'
          >
            <ListItemIcon>
              <GitHub className={classes.whiteColor} />
            </ListItemIcon>
            <ListItemText>Api</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}></main>
    </div>
  );
};

export default NewHeader;
