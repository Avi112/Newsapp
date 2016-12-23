import React from 'react';
import axios from 'axios';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
export default class First extends React.Component {
    constructor(props) {
        super(props);

        this.SaveData = this.SaveData.bind(this)

    }
    SaveData()
    {
        var news = this.props.NewsArray;

        axios.post('/SaveHeadline', {
            author: news.author,
            title: news.title,
            description: news.description,
            url: news.url,
            urlToImage: news.urlToImage,
            publishedAt: news.publishedAt,
            Comments: this.refs.myField.getValue()

        }).then(function(response) {
            console.log(response);

        }).catch(function(error) {
            console.log(error);
        });

    }

    render() {
        var style = {
            marginLeft: '70px'
        };

        return (
            <div>

                <TextField style={style} ref="myField" floatingLabelText="Comments"/>

                <br/>
                <FlatButton style={style} label="Save Headline" primary={true} onClick={this.SaveData}/>

            </div>
        );

    }
} //end of class
