import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem, FormGroup, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FormattedMessage } from 'react-intl';
import logo from './../media/tuplace.png';
import flagCO from './../media/flag-co.jpg';
import flagUS from './../media/flag-us.jpg';
import './Header.css';

class Header extends Component {

  changeLocale(locale) {
    if (localStorage.locale!==locale) {
      localStorage.locale = locale;
      location.reload();
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      currentLanguage: 'No request made.',
    }
  }

  render() {
    return (
      <header className="App-header">
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/"><img src={logo} alt="TuPlace" /> Tu<span>Place</span></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
             <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text" placeholder="Search..." />
              </FormGroup>
              {' '}
            </Navbar.Form>
            <Nav pullRight>                
              <NavDropdown id="cbLanguage" title={ <FormattedMessage id={ 'language' } /> } >
                <MenuItem onClick={() => this.changeLocale('es')}><img src={flagCO} className="img-circle img-flag-language" alt={ <FormattedMessage id={ 'spanish' } /> } /> { <FormattedMessage id={ 'spanish' } /> }</MenuItem>
                <MenuItem onClick={() => this.changeLocale('en')}><img src={flagUS} className="img-circle img-flag-language" alt={ <FormattedMessage id={ 'english' } /> } /> { <FormattedMessage id={ 'english' } /> }</MenuItem>
              </NavDropdown>
              <LinkContainer to="/">
                <NavItem><FormattedMessage id={ 'home' } /></NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem><FormattedMessage id={ 'about' } /></NavItem>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavItem><FormattedMessage id={ 'login' } /></NavItem>
              </LinkContainer>
              <LinkContainer to="/register">
                <NavItem><FormattedMessage id={ 'register' } /></NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
