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
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button className='testButton' type='button' onClick={() => alert('clicked')}>
          index
        </button>
        <br></br>
        <button className='testButton' type='button' onClick={() => alert('clicked')}>
          show
        </button>
        <br></br>
        <button className='testButton' type='button' onClick={() => alert('clicked')}>
          create
        </button>
        <br></br>
        <button className='testButton' type='button' onClick={() => alert('clicked')}>
          delete
        </button>
        <br></br>
        <button className='testButton' type='button' onClick={() => alert('clicked')}>
          test
        </button>
      </div>
    );
  }
}

export default App;
