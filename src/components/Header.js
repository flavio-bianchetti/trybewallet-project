// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DataHeader from '../data/DataHeader';

const { className, textColor } = DataHeader;

class Header extends React.Component {
  constructor() {
    super();

    this.getTotalExpenses = this.getTotalExpenses.bind(this);
  }

  getTotalExpenses() {
    const { getExpenses } = this.props;
    const totalExpenses = getExpenses.reduce(
      (acc, expense) => acc + Number((Number(expense.value)
      * Number(expense.exchangeRates[expense.currency].ask)).toFixed(2)),
      0,
    );
    return totalExpenses;
  }

  render() {
    const { userEmail } = this.props;
    return (
      <header
        className={ className }
      >
        <div
          className={ `${textColor} flex flex-grow justify-start pl-6` }
        >
          <span
            className={ textColor }
            data-testid="email-field"
          >
            { userEmail }
          </span>
        </div>
        <div
          className={ `${textColor} flex flex-grow justify-end pr-6` }
        >
          <span
            className={ textColor }
            data-testid="total-field"
          >
            { this.getTotalExpenses() }
          </span>
          <span
            className={ textColor }
            data-testid="header-currency-field"
          >
            { ' BRL' }
          </span>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  getExpenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  getExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
