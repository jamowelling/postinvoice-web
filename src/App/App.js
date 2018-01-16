import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';

// const DB_URL = 'https://postinvoice-api.herokuapp.com';

class App extends Component {
  someFunction = () => {
    const something = 'something';
    return something;
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(App);
