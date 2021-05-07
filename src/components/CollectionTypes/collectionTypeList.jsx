import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
// import tileData from './tileData';
import image from '../../assets/karen-vardazaryan-JBrfoV-BZts-unsplash.jpg';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },

  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

 
 const tileData = [
   {
     img: image,
     title: 'Collection Type',
     author: 'Cash Myers',
   },
   {
    img: image,
    title: 'Collection Type 2',
    author: 'Cash Myers',
  },
  {
    img: image,
    title: 'Collection Type 3',
    author: 'Cash Myers',
  },
  {
    img: image,
    title: 'Collection Type 4',
    author: 'Cash Myers',
  },
  {
    img: image,
    title: 'Collection Type 5',
    author: 'Cash Myers',
  },
 ];


export default function CollectionTypeList() {
  const classes = useStyles();

  return (
    <React.Fragment className={classes.root}>
      <GridList cellHeight={90} cols={1} height="auto" width="auto">
      <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
         <ListSubheader component="div">Collection Types</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <EditIcon fontSize="small" />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </React.Fragment>
  );
}
