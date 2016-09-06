import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Publish extends Component {
  render() {
    return (
      <h1 className="text-center"><FormattedMessage id={ 'publish' } /></h1>
    );
  }
}

export default Publish;
