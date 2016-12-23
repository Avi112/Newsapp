import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';

//This is a view layout, hence avoid putting any business logic
export default class Home extends React.Component {
    constructor()
    {
        super();

    }
    userlogout() {
        $.ajax({
            url: 'http://localhost:8080/users/logout',
            type: 'GET',
            success: function() {
                browserHistory.push('/');
            }.bind(this)
        });
    }
    render() {
        const style = {

            textDecoration: 'none'
        };
        var textColor = {
            color: "white",
            fontSize: "24px",
            fontWeight: '400',
            fontFamilt: 'roboto'
        }
        var title = {
            color: "white",
            'paddingTop': '8px',
            "textDecoration": "none"
        }
        console.log(this.props.children);
        return (
            <div>
                <AppBar title={< Link style = {
                    title
                }
                to = "/" > Home < /Link>} iconClassNameRight="muidocs-icon-navigation-expand-more" iconElementRight={< span > <Link to="/view">
                    <FlatButton style={textColor} label="Saved News"></FlatButton>
                </Link> < Link to = "/search" > <FlatButton style={textColor} label="search"></FlatButton> < /Link> <FlatButton style={textColor} label="Logout" onTouchTap={this.userlogout}></FlatButton > </span>}/> {this.props.children}
            </div>
        )
    }

}
