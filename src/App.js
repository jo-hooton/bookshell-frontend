import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import logo from './images/bookshell-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Bookshell</h1>
          </div>
        </header>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
