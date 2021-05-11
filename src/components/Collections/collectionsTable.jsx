import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import image from '../../assets/martin-adams-zbPDL84kvRg-unsplash.jpg';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.white,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    color: 'rgba(255, 255, 255, 0.95)'
  },
}));

 
const CollectionsTable = () => {

  const [collectionData, setCollectionData] = useState([])
  const classes = useStyles();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/fcCollections/')
      .then(response => setCollectionData(response.data))
  },[])

  // EditRequest Callback handler (pass back to parent)
  const handleOnClick = (tile) => {
    console.log('LIST - fcCollection_title: ', tile.fcCollection_title)
    // this.props.onItemRequest("Edit", tile)
    }

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={5} cellHeight={180} height="auto" width="180">
        {collectionData.map((tile) => (
          <GridListTile key={tile.fcCollecton_id}>
            <img src={image} alt={tile.fcCollection_title} />
            <GridListTileBar
              title={tile.fcCollection_title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton 
                  aria-label={`star ${tile.fcCollection_title}`} 
                  onClick={() => handleOnClick(tile)}>
                  <StarBorderIcon className={classes.title} style={{color: 'rgba(255, 255, 255, 0.95)' }} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default CollectionsTable