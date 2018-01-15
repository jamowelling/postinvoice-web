import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const DB_URL='https://postinvoice-api.herokuapp.com';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Postinvoice</h1>

          <div className="nav-container">

            <div className="nav-tab">
              <p>Tab 1</p>
            </div>

            <div className="nav-tab">
              <p>Tab 2</p>
            </div>

            <div className="nav-tab">
              <p>Tab 3</p>
            </div>

            <div className="nav-tab">
              <p>Tab 4</p>
            </div>

          </div>

        </header>


      </div>
    );
  }
}

export default App;
