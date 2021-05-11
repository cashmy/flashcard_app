import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CollectionsTable from '../components/Collections/collectionsTable';
import FlashCardContainer from '../components/FlashCardContainer/flashCardContainer'

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

const ViewFlashCards = () => {
    const classes = useStyles();

    return (

        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
                <CollectionsTable />
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={3} className={classes.paper}>FLASH CARDS:  </Paper>
                <FlashCardContainer />
            </Grid>
          </Grid>
        </div>

    )
}

export default ViewFlashCards;