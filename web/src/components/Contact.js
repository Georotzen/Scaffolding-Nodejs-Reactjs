import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Contact extends Component {
  render() {
    return (
      <h1 className="text-center"><FormattedMessage id={ 'contact-us' } /></h1>
    );
  }
}

export default Contact;
