import React from 'react';
import axios from 'axios';
import Divider from 'material-ui/Divider';
import {browserHistory} from 'react-router';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export default class Login extends React.Component {
    constructor() {
        super()
        this.isLoggedIn = this.isLoggedIn.bind(this);
    }
    isLoggedIn()
    {
        axios.post('/login', {
            username: this.refs.usrnme.getValue(),
            password: this.refs.pswrd.getValue()

        }).then(function(response) {
            console.log(response);
            browserHistory.push('/search');
        }.bind(this)).catch(function(error) {
            console.log(error);
            alert("wrong username or   password");
        });

    }

    render() {
        const style = {
            marginLeft: '50PX',
            marginRight: '50PX',
            marginTop: '30px'
        };
        const layout = {
            marginLeft: '30PX',
            marginRight: '30PX',
            marginTop: '100px'
        };
        const btn = {
            margin: '12',
            marginRight: '40px'
        };
        return (
            <div>

                <Paper style={layout} zDepth={2}>
                    <TextField style={style} ref='usrnme' floatingLabelText="Username" underlineShow={false}/>
                    <Divider/>
                    <TextField style={style} ref='pswrd' floatingLabelText="Password" underlineShow={false}/>
                    <Divider/>
                    <RaisedButton label="Sign In" secondary={true} style={btn} onClick={this.isLoggedIn}/>
                </Paper>

            </div>
        )
    }
}
