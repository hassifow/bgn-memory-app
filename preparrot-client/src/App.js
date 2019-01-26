import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Upload from './components/Upload'
import Record from './components/Record'
import Result from './components/Result'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch, withRouter } from 'react-router-dom'

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import ButtonAppBar from './ButtonAppBar';



class App extends Component {
  render() {
    return (
   
      <div className="App">
        {/* <header className="App-header"> */}
        <ButtonAppBar className="nav" />
       <Upload   />
     <Result />
    
     </div>
     
    
   
    
    );
  }
}

export default App;
