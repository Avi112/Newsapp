import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import SaveNews from './SaveNews'
export default class DisplayComponent extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const card = {
            position: 'relative',
            marginLeft: '45px',
            marginRight: '45px'
        };
        var Data = this.props.saveData;

        if (Data) {
            console.log(Data);
            var SourceCode = (Data.articles).map(function(item) {

                return (
                    <div>
                        <Card style={card}>
                            <CardHeader title={item.author}></CardHeader>
                            <CardMedia overlay={< CardTitle title = {
                                item.title
                            } />}>
                                <img  src={item.urlToImatge}/>
                            </CardMedia>

                            <CardText>
                                <p>{item.description}</p>
                                <p>
                                    <a href={item.url}>{item.url}</a>
                                </p>
                            </CardText>

                        </Card>
                        <SaveNews NewsArray={item}/>
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
                {SourceCode}
            </div>
        )
    }
} //end of class
