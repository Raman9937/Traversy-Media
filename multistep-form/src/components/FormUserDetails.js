import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormUserDetails extends Component {

    continue= e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values,handelChange }=this.props;

        return (
         <MuiThemeProvider>

                <AppBar title="Enter User details"/>
                <TextField 
                    hintText="Enter Your First Name"
                    floatingLabelText="First Name"
                    onChange={ handelChange('firstName') }
                    defaultValue={values.firstName}
                />
                <br/>
                <TextField 
                    hintText="Enter Your Last Name"
                    floatingLabelText="Last Name"
                    onChange={ handelChange('lastName') }
                    defaultValue={values.lastName}
                />
                <br/>
                                
                <TextField 
                    hintText="Enter Your Email Address"
                    floatingLabelText="Email"
                    onChange={ handelChange('email') }
                    defaultValue={values.email}
                />
                <br/>
                <br/>
                    {/* <RaisedButton
                    containerElement='label' // <-- Just add me!
                    label='My Label'>
                    <input type="file" />
                    </RaisedButton> */}

                    <br/>
                <RaisedButton
                label="Continue"
                primary={true}
                style= {styles.button}
                onClick={this.continue}
                />
                
         </MuiThemeProvider>
        );
    }
}

const styles ={
    button:{
        margin:15
    }
}
export default FormUserDetails;