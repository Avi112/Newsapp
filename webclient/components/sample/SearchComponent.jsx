import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import axios from 'axios';
import DisplayComponent from './DisplayComponent.jsx';

export default class SearchComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource2: [],
      articles: ''
    }
    this.selected = this.selected.bind(this)
  }
  componentWillMount() {
    axios.get('https://newsapi.org/v1/sources?language=en').then(function(response) {
      var arr = (response.data.sources).map((object) => {
        return object.id
      });
      this.setState({dataSource2: arr});
    }.bind(this));

  };

  selected(text, index) {
    axios.get('https://newsapi.org/v1/articles?apiKey=ef5df9cb43254e1eae31b16b14d7c9c7&source=' + text).then(function(response) {
      this.setState({articles: response.data});
      console.log(this.state.articles);
    }.bind(this));

  }

  render() {

    return (
      <div>

        <AutoComplete floatingLabelText="showAllNews" fullWidth={true} filter={AutoComplete.noFilter} filter={AutoComplete.caseInsensitiveFilter} openOnFocus={true} dataSource={this.state.dataSource2} onNewRequest={this.selected}/>

        <DisplayComponent saveData={this.state.articles}/>
      </div>
    );

  }
} //end of class
