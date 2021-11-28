// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../elements/Button';
import DataButtons from '../data/DataButtons';
import { setAllWalletExpenses } from '../actions/index';

class Table extends React.Component {
  constructor() {
    super();

    this.getTotalExpenses = this.getTotalExpenses.bind(this);
    this.renderRowTable = this.renderRowTable.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(event) {
    event.preventDefault();
    const { name } = event.target;
    const { getExpenses, setNewExpenses } = this.props;
    const selectedExpense = getExpenses.find(
      (expense) => expense.id === Number(name),
    );
    const valueDecreased = Number(
      (
        Number(selectedExpense.value)
          * Number(selectedExpense.exchangeRates[selectedExpense.currency].ask)
      ).toFixed(2),
    );

    const newExpenses = getExpenses.filter(
      (expense) => expense.id !== Number(name),
    );

    setNewExpenses({
      expenses: newExpenses,
      total: Number(this.getTotalExpenses()) - valueDecreased,
    });
  }

  renderRowTable(getExpenses, handleEditClick) {
    return (
      <tbody>
        {
          getExpenses.map((expense) => (
            <tr
              key={ expense.id }
            >
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ expense.value }</td>
              <td>{ (expense.exchangeRates[expense.currency].name).split('/')[0] }</td>
              <td>
                {
                  `${Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}`
                }
              </td>
              <td>
                {
                  `${(Number(expense.exchangeRates[expense.currency].ask)
                  * Number(expense.value)).toFixed(2)}`
                }
              </td>
              <td>Real</td>
              <td>
                <Button
                  dataTestId={ DataButtons[3].dataTestId }
                  type={ DataButtons[3].type }
                  name={ expense.id }
                  value={ DataButtons[3].value }
                  onClick={ handleEditClick }
                  isDisabled={ false }
                />
                <Button
                  dataTestId={ DataButtons[2].dataTestId }
                  type={ DataButtons[2].type }
                  name={ expense.id }
                  value={ DataButtons[2].value }
                  onClick={ this.handleClick }
                  isDisabled={ false }
                />
              </td>
            </tr>
          ))
        }
      </tbody>
    );
  }

  render() {
    const { getExpenses, handleEditClick } = this.props;
    return (
      // A estrutura de Table foi relembrada neste link:
      // https://www.w3schools.com/html/html_tables.asp
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        { this.renderRowTable(getExpenses, handleEditClick) }
      </table>
    );
  }
}

Table.propTypes = {
  getExpenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  setNewExpenses: PropTypes.func.isRequired,
  handleEditClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  getExpenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setNewExpenses: (payload) => dispatch(setAllWalletExpenses(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
