import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import Update from './Update.jsx'
export default class View extends React.Component {
    constructor() {
        super();
        this.state = {
            SavedNews: []
        }

    }

    componentWillMount()
    {
        this.fetchData();
    }
    fetchData() {
        axios.get('/View').then(function(response) {
            console.log(response);
            this.setState({SavedNews: response.data});
            console.log(this.state.SavedNews);
        }.bind(this));
    }

    render() {
        const style = {
            margin: 12
        };
        const card = {
            position: 'relative',
            marginLeft: '50px',
            marginRight: '50px'

        };

        if (this.state.SavedNews) {
            var display = (this.state.SavedNews).map((item) => {

                return (
                    <div>
                        <Card style={card}>
                            <CardHeader title={item.author}></CardHeader>
                            <CardMedia overlay={< CardTitle title = {
                                item.title
                            } />}>
                                <img src={item.urlToImage}/>
                            </CardMedia>

                            <CardText>
                                <p>{item.description}</p>
                                <p>
                                    <a href={item.url}>{item.url}</a>
                                </p>
                                <p>{item.Comments}</p>
                            </CardText>
                            <Update getData={this.fetchData.bind(this)} updateComment={item}/>
                        </Card>

                    </div>
                );

            });
        } else {
            return (
                <h1></h1>
            )
        }
        return (
            <div>
                {display}
            </div>
        )

    }
} //end of class
