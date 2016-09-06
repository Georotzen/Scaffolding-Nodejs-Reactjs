import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Login extends Component {
  render() {
    return (
      <h1 className="text-center"><FormattedMessage id={ 'login' } /></h1>
    );
  }
}

export default Login;
