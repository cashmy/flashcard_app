import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MiniDrawer from './MiniDrawer/miniDrawer'
import { BrowserRouter as Router } from 'react-router-dom'


const App = () => {


  return (
    <div >
      <Router> 
        <CssBaseline />
        <MiniDrawer />
      </Router>
    </div>
  );
}

export default App;