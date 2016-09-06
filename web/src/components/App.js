import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <section className="App-content">
          <div className="container-fluid">
            {this.props.children}
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default App;
