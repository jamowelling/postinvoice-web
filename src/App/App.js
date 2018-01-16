import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Header from './Header';
import Invoices from '../invoices/InvoicesContainer';
import InventorySheets from '../inventorySheets/InventorySheetsContainer';
import Reports from '../reports/ReportsContainer';
import Declining from '../decliningBudget/DecliningContainer';
// const DB_URL = 'https://postinvoice-api.herokuapp.com';

class App extends Component {
  someFunction = () => {
    const something = 'something';
    return something;
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/invoices" component={Invoices} />
          <Route path="/inventory_sheets" component={InventorySheets} />
          <Route path="/reports" component={Reports} />
          <Route path="/declining" component={Declining} />
        </div>
      </Router>
    );
  }
}

export default App;
