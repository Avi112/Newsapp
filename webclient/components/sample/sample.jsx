import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Dat from './Component/dat'
export default class Sample extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <h1>Hello {this.props.message}</h1>

            </div>
        );
    }
} //end of class
