import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Help extends Component {
  render() {
    return (
      <h1 className="text-center"><FormattedMessage id={ 'help' } /></h1>
    );
  }
}

export default Help;
