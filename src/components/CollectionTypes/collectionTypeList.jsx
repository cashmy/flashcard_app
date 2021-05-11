import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
// import tileData from './tileData';
import image from '../../assets/karen-vardazaryan-JBrfoV-BZts-unsplash.jpg';
import axios from 'axios'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  }
});

class CollectionTypeList extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }
  state = {
    collectionTypeData: []
  }

  componentDidMount() {
    this.getAllCollectionTypes();
  }

  async getAllCollectionTypes() {
    let response = await axios.get('http://127.0.0.1:8000/fcCollectionType/') 
      this.setState({
        collectionTypeData: response.data
      })
  }

  // EditRequest Callback handler (pass back to parent)
  handleOnClick = (tile) => {
    console.log('LIST - fcCollectionType_id: ', tile.fcCollectionType_id)
    this.props.onItemRequest("Edit", tile)
    }

render () {
  const classes = this.props;

    return (
      <div className={classes.root}>
        <GridList cellHeight={90} cols={1} height="auto" width="auto">
        <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
          <ListSubheader component="div">Collection Types</ListSubheader>
          </GridListTile>
          {this.state.collectionTypeData.map((tile) => (
            <GridListTile key={tile.fcCollectionType_id}>
              <img src={image} alt={tile.fcCollectionType_name} />
              <GridListTileBar
                title={tile.fcCollectionType_name}
                actionIcon={
                  <IconButton 
                    aria-label={`edit ${tile.fcCollectionType_name}`}
                    onClick={() => this.handleOnClick(tile)}>
                    <EditIcon fontSize="small" style={{color: 'rgba(255, 255, 255, 0.54)' }} />
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

export default withStyles(styles, {withTheme: true})(CollectionTypeList)