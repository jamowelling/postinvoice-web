import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Nav, NavItem, PageHeader } from 'react-bootstrap';

const DB_URL='https://postinvoice-api.herokuapp.com';

class App extends Component {
  render() {
    return (
      <div className="App">

        <PageHeader bsClass='page-header'>

          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Postinvoice</h1>
          </div>

          <div>
            <Nav
              bsStyle="tabs"
              bsClass=" nav nav-tabs nav-justified custom-nav"
              justified
              activeKey={1}
              onSelect={() => alert('hit')}
            >
              <NavItem eventKey={1} href="/home">
                Invoices
              </NavItem>
              <NavItem eventKey={2} title="Item">
                Inventory Sheets
              </NavItem>
              <NavItem eventKey={3}>
                Reports
              </NavItem>
              <NavItem eventKey={4}>
                Declining Budget
              </NavItem>
            </Nav>
          </div>

        </PageHeader>
      </div>
    );
  }
}

export default App;
