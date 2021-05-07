import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CollectionList from '../components/Collections/collectionList';
import CollectionEdit from '../components/Collections/collectionEdit';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
    paperbox: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
        height: 400,
      },
  }));

const ViewCollections = () => {
    const classes = useStyles();

    return (
      <React.Fragment>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <CollectionList />
            </Grid>
            <Grid item xs={9}>
              <Paper elevation={3} className={classes.paper}>ADD/EDIT Collection </Paper>
              <CollectionEdit />
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
}

export default ViewCollections;