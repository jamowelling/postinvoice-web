import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  PageHeader,
} from 'react-bootstrap';

import './Header.css';

const Header = () => (
  <PageHeader bsClass="page-header">
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a id="home-link" href="/invoices">Postinvoice</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav bsClass="nav navbar-nav custom-nav">
        <NavItem eventKey={1} href="/invoices">
          Invoices
        </NavItem>
        <NavItem eventKey={2} href="/inventory_sheets">
          Inventory Sheets
        </NavItem>
        <NavItem eventKey={3} href="/reports">
          Reports
        </NavItem>
        <NavItem eventKey={4} href="/declining">
          Declining Budget
        </NavItem>
      </Nav>
    </Navbar>
  </PageHeader>
);

export default Header;
