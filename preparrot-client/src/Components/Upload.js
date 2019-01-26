import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextFields from '@material-ui/icons/TextFields';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile'

import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

class Upload extends Component {

    state = {
        recording: false,
        overTime: false
        

        
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
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
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
      
      // const theme = createMuiTheme({
      //   palette: {
      //     primary: green,
      //   },
      //   typography: { useNextVariants: true },
      // });

      

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

        <MuiThemeProvider >
          <TextField
         
            label="Name of speech"
            id="mui-theme-provider-standard-input"
          />
          <TextField
            
            label="Duration"
            
            id="mui-theme-provider-outlined-input"
          />
          </MuiThemeProvider>

          <div className="textBox">
          </div>
          
    </div>




      )
    }
}

export default Upload