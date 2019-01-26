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


class Upload extends Component {

    state = {
        recording: false,
        overTime: false,
        time: 0,
        duration: 0,
        text: ''
        

        
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

    stopRecord = () => {

    }

    
      

    handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value})

    }
    render() {
    
      const styles = theme => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        margin: {
          margin: theme.spacing.unit,
        },
        cssLabel: {
          '&$cssFocused': {
            // color: purple[500],
          },
        },
        cssFocused: {},
        cssUnderline: {
          '&:after': {
            // borderBottomColor: purple[500],
          },
        },
        cssOutlinedInput: {
          '&$cssFocused $notchedOutline': {
            // borderColor: purple[500],
          },
        },
        notchedOutline: {},
        bootstrapRoot: {
          'label + &': {
            marginTop: theme.spacing.unit * 3,
          },
        },
        bootstrapInput: {
          borderRadius: 4,
          backgroundColor: theme.palette.common.white,
          border: '1px solid #ced4da',
          fontSize: 16,
          padding: '10px 12px',
          transition: theme.transitions.create(['border-color', 'box-shadow']),
          // Use the system font instead of the default Roboto font.
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"'
          ].join(','),
          '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
          },
        },
        bootstrapFormLabel: {
          fontSize: 18,
        },
      });
      
      const recordColor = {
        background: this.state.time > this.state.duration ? 'red' : 'blue'
      };

      const clockColor = {
        color: this.state.time > this.state.duration ? 'red' : 'blue',
        padding: '30px',
        borderRadius:'50%'
      };

      return (
        <div className="upload-container">

            <div className="text-input-toggle">
            <Button variant="contained" color="secondary" >
            Text
            <TextFields />
            </Button>
            <Button variant="contained" color="secondary" >
            Documents
            <InsertDriveFile  />
            </Button>
          </div>

        <Paper>
        <MuiThemeProvider >
          <TextField
         
            label="Name of speech"
            id="mui-theme-provider-standard-input"
          />
          <TextField
            
            label="Duration"
            name="duration"
            value=""
            id="mui-theme-provider-outlined-input"
          />
          </MuiThemeProvider>

          <div className="textBox">
              <TextField
                  id="filled-multiline-static"
                  label="Multiline"
                  multiline
                  rows="4"
                  value="Paste your speech here"
                  name="text"
                  margin="normal"
                  variant="filled"
          />
         </div>
         </Paper>

          {!this.state.recording ?
         <div className="record-button">
      
         <i style={recordColor} id="mic-icon" onClick={this.startRecord} className="material-icons">mic</i>
         
         </div>
         :
         <div className="record-button">
         <i style={recordColor} id="mic-icon" className="material-icons  md-48">mic</i>
         <p style={clockColor}>{this.state.time}/{this.state.duration}</p>
         </div>}


 <Record />
    </div>





      )
    }
}

export default Upload