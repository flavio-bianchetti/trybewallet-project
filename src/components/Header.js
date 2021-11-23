// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTotalExpenses } from '../actions/index';

class Header extends React.Component {
  constructor() {
    super();

    this.newTotalExpenses = this.newTotalExpenses.bind(this);
  }

  newTotalExpenses() {
    const { getExpenses, updateTotalExpenses } = this.props;
    let totalExpenses = 0;
    if (getExpenses.length > 0) {
      totalExpenses = getExpenses.reduce(
        (acc, expense) => acc
        + Number((Number(expense.value)
        * Number(expense.exchangeRates[expense.currency].ask)).toFixed(2)),
        0,
      );
    }
    updateTotalExpenses({
      total: totalExpenses,
    });
    return totalExpenses;
  }

  render() {
    const { userEmail, getTotalExpenses } = this.props;
    return (
      <header>
        <span data-testid="email-field">
          { userEmail }
        </span>
        <span data-testid="total-field">
          { getTotalExpenses !== undefined ? getTotalExpenses : this.newTotalExpenses() }
        </span>
        <span data-testid="header-currency-field">
          { ' BRL' }
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  getExpenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  getTotalExpenses: PropTypes.number.isRequired,
  updateTotalExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  getExpenses: state.wallet.expenses,
  getTotalExpenses: state.totalExpenses,
});

const mapDispatchToProps = (dispatch) => ({
  updateTotalExpenses: (payload) => dispatch(setTotalExpenses(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
