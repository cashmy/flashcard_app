import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CollectionTypeList from '../components/CollectionTypes/collectionTypeList';
import CollectionTypeEdit from '../components/CollectionTypes/collectionTypeEdit';
import CollectionTypeAdd from '../components/CollectionTypes/collectionTypeAdd';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
      backgroundColor: '#808080',
    },
    paperbox: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
        height: 400,
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
  }));

const ViewCollectionTypes = () => {
    const [cTypesMode, setCTypesMode] = useState('')
    const classes = useStyles();

    // Switch Mode and trigger for render of Add component
    const handleOnAdd = () => {
        setCTypesMode('Add')
    }

    // On Cancel request, remove Add component
    const onClearCallback = (text) => {
        setCTypesMode('')
    }

    // // Switch Mode and trigger for render of Edit component
    // const onEditClickCallback = () => {
    //     setCTypesMode('Edit')
    // }

    // // After Edit, remove Edit component and rerender table List
    // const onEditDoneCallback =() => {
    //     setCTypesMode('')
    // }

    useEffect(() => {
        // Trigger a re-render on change of mode
    }, [cTypesMode])

    return (

        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <CollectionTypeList/>
            </Grid>
            <Grid item xs={9}>
              <Paper elevation={3} className={classes.paper}>ADD/EDIT Collection Types 
                    <Fab
                        className={classes.fab}
                        size="small" 
                        color="primary" 
                        aria-label="add"
                        onClick={handleOnAdd}
                    >
                        <AddIcon 
                        />
                    </Fab></Paper>
                {cTypesMode === 'Edit' && <CollectionTypeEdit onClearCallback={onClearCallback}/> }
                {cTypesMode === 'Add' && <CollectionTypeAdd  onClearCallback={onClearCallback}/> }
            </Grid>
          </Grid>
        </div>

    )
}

export default ViewCollectionTypes;