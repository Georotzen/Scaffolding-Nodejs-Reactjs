import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import { IntlProvider, addLocaleData } from 'react-intl';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Privacy from './components/Privacy';
import Register from './components/Register';
import Terms from './components/Terms';
import Help from './components/Help';
import Publish from './components/Publish';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

addLocaleData(require('react-intl/locale-data/en'))
addLocaleData(require('react-intl/locale-data/es'));
const language = localStorage.locale || 'es';
const messagesApp = require(`./locale-data/${language}.js`);

ReactDOM.render((
  <IntlProvider locale={language} messages={messagesApp}>
    <Router history={browserHistory}>
      <Route component={App}>
      	<Route path="/" component={Home}/>
        <Route path="about" component={About}/>
        <Route path="contact" component={Contact}/>
        <Route path="login" component={Login}/>
        <Route path="register" component={Register}/>
        <Route path="privacy" component={Privacy}/>
        <Route path="terms" component={Terms}/>
        <Route path="help" component={Help}/>
        <Route path="publish" component={Publish}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </IntlProvider>
), document.getElementById('root'))
