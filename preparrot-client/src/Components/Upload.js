import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextFields from '@material-ui/icons/TextFields';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile'
import Paper from '@material-ui/core/Paper';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Mic from '@material-ui/icons/Mic';


import Record from './Record'

class Upload extends Component {

    state = {
        recording: false,
        overTime: false,
        time: 0,
        duration: 0,
        text: '',
        recordedText: ''

        
    }

    setColor = () => {

    }


    updateTime = () => {
      this.setState({
        time: this.state.time + 1
      });
    };
  
    startRecord = () => {

      this.setState({recording: true})
      this.interval = setInterval(this.updateTime, 1000);
      
    };

    sendText = (e) => {
      e.preventDefault();
      const response =  fetch('/speech/text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: this.state.text }),
    });
    const body =  response.text();
    this.setState({ responseToPost: body });
  };
    
    

    stopRecord = () => {

    }

    
      

    handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value})

    }
    render() {
    
      
      
      const recordColor = {
        background: this.state.time > this.state.duration ? 'red' : 'blue'
      };

      const clockColor = {
        color: this.state.time > this.state.duration ? 'red' : 'blue',
        padding: '30px',
        borderRadius:'50%'
      };

      return (
        <div>
        <div className="upload-container">

        <Paper className="text-section">
       
          

          <TextField
          id='mui-theme-provider-standard-input'
          label='Name of speech'
          value={this.state.speechName}
          onChange={this.handleChange}
          margin='normal'
          name='speechName'
          required="true"
        />

        <TextField
          id='mui-theme-provider-standard-input'
          label='Duration'
          value={this.state.duration}
          onChange={this.handleChange}
          margin='normal'
          name='duration'
          required="true"
        />
<br />
            <TextField
          id='text-input'
          label='Text'
          value={this.state.text}
          onChange={this.handleChange}
          margin='normal'
          multiline
          rows="15"
          required="true"
          name='text'
          
        />
       {!this.state.recording ?
      <div className="record-button">
           <i style={recordColor} id="mic-icon" onClick={this.startRecord} className="material-icons">mic</i>
      </div>
      :
      <div className="record-button">
         <i style={recordColor} id="mic-icon" className="material-icons  md-48">mic</i>
         <p style={clockColor}>{this.state.time}/{this.state.duration}</p>
      </div>}
         
        
         </Paper>
         </div>

<div className="webcam-container">
        <Record className="webcam"/>

      


    </div>

<br />
<br />
    


      </div>



      )
    }
}

export default Upload