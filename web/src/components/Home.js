import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

function parseJSON(response) {
  return response.json();
}

class Home extends Component {
	constructor(props) {
    super(props);
    this.state = {
      lastResponse: 'No request made.',
    }
  }
  componentDidMount() {
    fetch('http://localhost:3001/api/common/test', {
      accept: 'application/json',
    })
    .then(parseJSON)
    .then((json) => (
      this.setState({ lastResponse: json.message })
    ))
    .catch(function(err){
      console.error(err.message);
    })
  }
  render() {
    return (
    	<div>
      	<h1 className="text-center"><FormattedMessage id={ 'welcome' } /></h1>
      	<p>Response: {this.state.lastResponse}</p>
      </div>
    );
  }
}

export default Home;
