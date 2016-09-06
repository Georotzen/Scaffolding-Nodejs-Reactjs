import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class About extends Component {
  render() {
    return (
      <h1 className="text-center"><FormattedMessage id={ 'about' } /></h1>
    );
  }
}

export default About;
