import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <AppBar 
                    title="Success"
                />
                <h1> Thank You ! Your Data is  Submitted </h1>
                <p> Our Team will Get Back To You Soon ! </p>
            </MuiThemeProvider>
            
        );
    }
}

export default Success;