import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
// import tileData from './tileData';
import image from '../../assets/karen-vardazaryan-JBrfoV-BZts-unsplash.jpg';
import axios from 'axios'


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

 
// const tileData = mapTileData()
//  const tileData = [
//    {
//      id: 0,
//      img: image,
//      title: 'Collection Type',
//      author: 'Cash Myers',
//    },
//    {
//     id: 1,
//     img: image,
//     title: 'Collection Type 2',
//     author: 'Cash Myers',
//   },
//   {
//     id: 2,
//     img: image,
//     title: 'Collection Type 3',
//     author: 'Cash Myers',
//   },
//   {
//     id: 3,
//     img: image,
//     title: 'Collection Type 4',
//     author: 'Cash Myers',
//   },
//   {
//     id: 4,
//     img: image,
//     title: 'Collection Type 5',
//     author: 'Cash Myers',
//   },
//  ];


export default function CollectionTypeList() {
  const classes = useStyles();
  const [collectionTypeData, setCollectionTypeData] = useState({})
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    // if (collectionTypeData === {} || collectionTypeData === undefined ) {
      setLoading(true);
      axios.get('http://127.0.0.1:8000/fcCollectionType/')
      .then(response => { 
          console.log(response.data)
          setCollectionTypeData(response.data.items); 
          setLoading(false)})
      .catch(error => {alert('There was an error! ' + error.message)})
    // }
  },[collectionTypeData])
  
  const mapTileData = () => {
    if (collectionTypeData === '' || collectionTypeData === undefined ) 
    return ([{
           id: 0,
           img: image,
           title: 'Collection Type',
           author: 'Cash Myers',
         }])

    console.log("Mapping ...: ", collectionTypeData)
    let mapResult = []
    for (let i = 0; i < collectionTypeData.length; i++) {
      mapResult.push({
        id: i,
        img: image,
        title: collectionTypeData[i].fcCollectionType_name
      })
    }
    return mapResult
  }
  
  const tileData = mapTileData()

  return (
    <div className={classes.root}>
      <GridList cellHeight={90} cols={1} height="auto" width="auto">
      <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
         <ListSubheader component="div">Collection Types</ListSubheader>
        </GridListTile>
         if {loading} { <div>Loading ... </div> }
        {tileData.map((tile) => (
          <GridListTile key={tile.id}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              // subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <EditIcon fontSize="small" />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
