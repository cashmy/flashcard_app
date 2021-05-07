import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
// import tileData from './tileData';
import image from '../../assets/martin-adams-zbPDL84kvRg-unsplash.jpg';
import axios from 'axios'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    '& .MuiButtonBase-root': {
      color: 'rgba(255, 255, 255, 0.54)',
    }
  },

});
class CollectionList extends React.Component {

  state = {
    collectionData: []
  }

  componentDidMount() {
    this.getAllCollections();
  }

  async getAllCollections() {
    let response = await axios.get('http://127.0.0.1:8000/fcCollections/') 
      this.setState({
        collectionData: response.data
      })
      console.log("Response data:", response.data)
  }

  render(){
    const classes = this.props;

    return (
      <div className={classes.root}>
        <GridList cellHeight={90} cols={1} height="auto" width="auto">
        <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
          <ListSubheader component="div">Collections</ListSubheader>
          </GridListTile>
          {this.state.collectionData.map((tile) => (
            <GridListTile key={tile.fcCollection_id}>
              <img src={image} alt={tile.fcCollection_title} />
              <GridListTileBar
                title={tile.fcCollection_title}
                actionIcon={
                  <IconButton aria-label={`edit ${tile.fcCollection_title}`}>
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
}

export default withStyles(styles, {withTheme: true})(CollectionList)
