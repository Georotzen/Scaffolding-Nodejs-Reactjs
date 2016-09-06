import  React, { Component } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <footer className="App-footer">
        <div className="container">
          <div className="row"> 
            <div className="col-lg-6 col-md-4 col-sm-4"> 
              <h4>© TuPlace 2016</h4> 
              <p className="slogan"><FormattedMessage id={ 'slogan' } /></p> 
              <p><Link to="/publish" className="btn btn-success btn-shadow"><FormattedMessage id={ 'publish' } /></Link></p>
            </div> 
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6"> 
              <h4><FormattedMessage id={ 'about' } /></h4> 
              <ul className="list-unstyled"> 
                <li><Link to="/contact"><FormattedMessage id={ 'contact-us' } /></Link></li> 
                <li><Link to="/help"><FormattedMessage id={ 'help' } /></Link></li> 
                <li><Link to="/privacy"><FormattedMessage id={ 'privacy' } /></Link></li> 
                <li><Link to="/terms"><FormattedMessage id={ 'terms' } /></Link></li> 
                <li><a href="mailto:jhonfredynova@gmail.com"><FormattedMessage id={ 'support' } /></a></li> 
              </ul> 
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6"> 
              <h4><FormattedMessage id={ 'follow-us' } /></h4>
              <ul className="list-unstyled"> 
                <li><i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i> <a href="https://www.facebook.com/jhonfredynova" target="_blank">jhonfredynova</a></li> 
                <li><i className="fa fa-youtube fa-2x" aria-hidden="true"></i> <a href="https://www.youtube.com/channel/UCThaydVBTU4XreJedYsMTEg" target="_blank">jhonfredynova</a></li> 
                <li><i className="fa fa-twitter fa-2x" aria-hidden="true"></i> <a href="https://twitter.com/jhonfredynova" target="_blank">jhonfredynova</a></li> 
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
