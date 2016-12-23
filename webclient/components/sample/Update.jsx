import React from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
export default class Update extends React.Component {
    constructor(props) {
        super(props);

        this.toUpdate = this.toUpdate.bind(this);
        this.toDelete = this.toDelete.bind(this);

    }
    toUpdate()
    {
        var id = this.props.updateComment._id;
        axios.post('/update', {
            objId: id,
            Comments: this.refs.bb.getValue()

        }).then(function(response) {
            console.log(response);

        }.bind(this)).catch(function(error) {
            console.log(error);
        });
        this.props.getData();
    }
    toDelete()
    {
        var id = this.props.updateComment._id;
        console.log(id);
        axios.delete('/delete/' + id).then(function(response) {
            console.log(response);
        }.bind(this)).catch(function(error) {
            console.log(error);
        });
        this.props.getData();
    }
    render() {
        const style = {
            margin: 12
        };

        return (
            <div>
                <TextField floatingLabelText="Comments" ref='bb'/><br/>
                <RaisedButton label="Update" style={style} onClick={this.toUpdate}/>
                <RaisedButton label="Delete" style={style} onClick={this.toDelete}/>

            </div>
        );

    }
} //end of class
