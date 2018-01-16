import React, { Component } from 'react';
import { Nav, NavItem, PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';

import './App.css';

const DB_URL = 'https://postinvoice-api.herokuapp.com';

class App extends Component {
  someFunction = () => {
    const something = 'something';
    return something;
  }

  render() {
    return (
      <div className="App">
        <PageHeader bsClass="page-header">
          <div>
            <h1 className="App-title">Postinvoice</h1>
          </div>
          <div>
            <Nav
              bsStyle="tabs"
              bsClass="nav nav-tabs nav-justified custom-nav"
              justified
              activeKey={1}
              onSelect={() => console.log('prpos: ', this.props)}
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

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(App);
