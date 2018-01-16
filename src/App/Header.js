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
          <a id="home-link" href="#home">Postinvoice</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav bsClass="nav navbar-nav custom-nav">
        <NavItem eventKey={1} href="#">
          Invoices
        </NavItem>
        <NavItem eventKey={2} href="#">
          Inventory Sheets
        </NavItem>
        <NavItem eventKey={3} href="#">
          Reports
        </NavItem>
        <NavItem eventKey={4} href="#">
          Declining Budget
        </NavItem>
      </Nav>
    </Navbar>
  </PageHeader>
);

export default Header;
