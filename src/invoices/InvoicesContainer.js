import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchInvoices } from './actions';

class InvoicesContainer extends Component {
  componentDidMount() {
    this.props.fetchInvoices();
  }
  render() {
    console.log('this.props: ', this.props);
    return (
      <div>
        <h1>Invoices Container</h1>
      </div>
    );
  }
}

InvoicesContainer.propTypes = {
  fetchInvoices: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ ...state });

export default withRouter(connect(mapStateToProps, { fetchInvoices })(InvoicesContainer));
