import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import CollectionsIcon from '@material-ui/icons/Collections';
import CategoryIcon from '@material-ui/icons/Category';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ImageSearchTwoToneIcon from '@material-ui/icons/ImageSearchTwoTone';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import FlashCardContainer from '../FlashCardContainer/flashCardContainer'
import ViewCollections from '../../Views/view_collections'
import ViewCollectionTypes from '../../Views/view_collectionTypes'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
      
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Flash Card Bonanza
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            'Brand logo'
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link to={''}>
              <ListItem button key='0'>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary='Home' />
              </ListItem>
            </Link>
            <Link to={'collection'}>
              <ListItem button key='1'>
                  <ListItemIcon><CollectionsIcon /></ListItemIcon>
                  <ListItemText primary='Collections' />
              </ListItem>
            </Link> 
            <Link to={'collectionType'}>
              <ListItem button key='2'>
                  <ListItemIcon><CategoryIcon /></ListItemIcon>
                  <ListItemText primary='Collection Types' />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List>
            <ListItem button key='3'>
              <ListItemIcon><AccountCircleIcon /></ListItemIcon>
              <ListItemText primary='Profile' />
            </ListItem>
            <Link to={{ pathname: 'https://unsplash.com/' }} target="_blank">
              <ListItem button key='4'>
                <ListItemIcon><ImageSearchTwoToneIcon /></ListItemIcon>
                <ListItemText primary='Media' />
              </ListItem>
            </Link>
            <ListItem button key='5'>
              <ListItemIcon><ExitToAppIcon /></ListItemIcon>
              <ListItemText primary='Log In' />
            </ListItem>
          </List>
        </Drawer>
      
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <Route exact={true} path="/" component={FlashCardContainer} />
            <Route exact={true} path="/collection" component={ViewCollections} />
            <Route exact={true} path={'/collectionType'} component={ViewCollectionTypes} />
        </main>
      </Router>
    </div>
  );
}
