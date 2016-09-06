import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Terms extends Component {
  render() {
    return (
      <h1 className="text-center"><FormattedMessage id={ 'terms' } /></h1>
    );
  }
}

export default Terms;
