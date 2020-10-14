import React, { useState } from 'react';
// import { Navbar, Icon, Dropdown } from 'react-materialize';
// import { useLocation, Link } from 'react-router-dom';
import clsx from 'clsx';
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListSubheader,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemLink from './hooks/ListItemLink';
import Storefront from '@material-ui/icons/Storefront';
import { AddShoppingCart, Home, Opacity } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    backgroundColor: 'green',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuClose: {
    display: 'none',
  },
  listIcon: {
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
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  title: {
    flexGrow: 1,
  },
  divierSubheader: {
    color: 'dark grey',
  },
}));

const NewHeader = () => {
  // Gets the name of main page (ex. gets 'marketplace' from location '/marketplace/list/1-1')
  // const location = useLocation().pathname.split('/')[1];
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleDrawerClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='static' style={{ backgroundColor: '#303030' }}>
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
        <List>
          <ListItemLink
            to=''
            icon={<Home className={classes.listIcon} />}
            primary='Home'
          />
          <ListItemLink
            to='marketplace'
            icon={<Storefront className={classes.listIcon} />}
            primary='Marketplace'
          />
          <ListItemLink
            to='caphras-calculator'
            icon={<Opacity className={classes.listIcon} />}
            primary='Caphras Calculator'
          />
          <ListItemLink
            to='upgrade-calculator'
            icon={<AddShoppingCart className={classes.listIcon} />}
            primary='Upgrade Calculator'
          />
          <Divider />
          <ListSubheader className={classes.divierSubheader} inset>
            Misc.
          </ListSubheader>
          <ListItemLink
            to='https://github.com/eljoey/BDO-Api-Helper'
            primary='API'
          />
        </List>
      </Drawer>
      <main className={classes.content}></main>
    </div>
  );
};

export default NewHeader;

{
  /* <div>
      <Navbar
        alignLinks='right'
        brand={
          <Link to='/' className='brand-logo'>
            BDO-Stuff
          </Link>
        }
        centerChildren
        id='mobile-nav'
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: false,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
        className='black'
      >
        <Link
          to='/marketplace'
          className={location === 'marketplace' ? 'grey darken-3' : ''}
        >
          Marketplace
        </Link>

        <Link
          to='/caphras-calculator'
          className={location === 'caphras-calculator' ? 'grey darken-3' : ''}
        >
          Caphras Calculator
        </Link>
        <Link
          to='/upgrade-calculator'
          className={location === 'upgrade-calculator' ? 'grey darken-3' : ''}
        >
          Upgrade Calculator
        </Link>
        <Dropdown
          id='Dropdown_6'
          options={{
            alignment: 'left',
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            container: null,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 250,
          }}
          trigger={
            <a href='#!'>
              Misc. Tools <Icon right>arrow_drop_down</Icon>
            </a>
          }
        >
          <Link to='/kutum-or-nouver' className='grey darken-3 linkHover'>
            Kutum or Nouver
          </Link>
          <a
            href='https://github.com/eljoey/BDO-Api-Helper'
            className='grey darken-3 linkHover'
          >
            Marketplace Api
          </a>
        </Dropdown>
      </Navbar>
    </div> */
}
