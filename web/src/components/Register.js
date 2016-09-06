import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Register extends Component {
  render() {
    return (
      <h1 className="text-center"><FormattedMessage id={ 'register' } /></h1>
    );
  }
}

export default Register;
