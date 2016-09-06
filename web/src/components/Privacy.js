import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Privacy extends Component {
  render() {
    return (
      <h1 className="text-center"><FormattedMessage id={ 'privacy' } /></h1>
    );
  }
}

export default Privacy;
