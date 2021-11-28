// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../elements/Input';
import Select from '../elements/Select';
import Button from '../elements/Button';
import DataInputs from '../data/DataInputs';
import DataSelect from '../data/DataSelect';
import { setAllWalletExpenses } from '../actions/index';

class FormEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      valueInput: '0',
      descriptionInput: '',
      currencyInput: 'USD',
      methodInput: 'Dinheiro',
      tagInput: 'Alimentação',
      dataSelect: ['USD', 'CAD', 'EUR', 'GBP', 'ARS', 'BTC', 'LTC', 'JPY',
        'CHF', 'AUD', 'CNY', 'ILS', 'ETH', 'XRP'],
    };

    this.getTotalExpenses = this.getTotalExpenses.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.removeCurrenciesNotValid = this.removeCurrenciesNotValid.bind(this);
    this.updateFields = this.updateFields.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  componentDidMount() {
    this.updateFields();
  }

  getTotalExpenses() {
    const { getWallet } = this.props;
    const { expenses } = getWallet;
    const totalExpenses = expenses.reduce(
      (acc, expense) => acc + Number((Number(expense.value)
      * Number(expense.exchangeRates[expense.currency].ask)).toFixed(2)),
      0,
    );
    return totalExpenses;
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const {
      idExpense,
      valueInput,
      descriptionInput,
      currencyInput,
      methodInput,
      tagInput,
    } = this.state;

    const { getWallet, setAllExpense } = this.props;
    const { expenses, currencies } = getWallet;

    const selectedExpense = expenses.find((expense) => expense.id === idExpense);
    const { exchangeRates } = selectedExpense;

    const newExpense = {
      id: Number(idExpense),
      value: valueInput,
      description: descriptionInput,
      currency: currencyInput,
      method: methodInput,
      tag: tagInput,
      exchangeRates,
    };

    const newExpenses = expenses.reduce(
      (acc, expense) => [...acc, (expense.id === idExpense ? newExpense : expense)], [],
    );
    setAllExpense({ currencies, expenses: newExpenses });
    this.setState({
      idExpense: Number(idExpense),
      valueInput: '0',
    });
  }

  removeCurrenciesNotValid(object) {
    // Solução abaixo foi relembrada através do link:
    // https://www.w3schools.com/howto/howto_js_remove_property_object.asp
    const newObject = { ...object };
    delete newObject.USDT;
    delete newObject.DOGE;
    return newObject;
  }

  updateFields() {
    const { id, value, currency, description, method, tag } = this.props;
    this.setState({
      idExpense: id,
      valueInput: value,
      currencyInput: currency,
      descriptionInput: description,
      methodInput: method,
      tagInput: tag,
    });
  }

  renderButton() {
    return (
      <Button
        dataTestId="edit-btn"
        type="button"
        name="editBtn"
        value="Editar despesa"
        onClick={ this.handleClick }
        isDisabled={ false }
      />
    );
  }

  render() {
    const { valueInput, descriptionInput,
      currencyInput, methodInput, tagInput, dataSelect } = this.state;
    const selectedItens = [currencyInput, methodInput, tagInput];
    return (
      <fieldset>
        <Input
          dataTestId={ DataInputs[2].dataTestId }
          type={ DataInputs[2].type }
          name={ DataInputs[2].name }
          placeholder={ DataInputs[2].placeholder }
          value={ valueInput }
          onChange={ this.handleChange }
          isDisabled={ false }
          label={ DataInputs[2].label }
        />
        { DataSelect.map((select, index) => (
          <Select
            key={ index }
            dataTestId={ select.dataTestId }
            name={ select.name }
            values={ index === 0 ? dataSelect : select.values }
            onChange={ this.handleChange }
            label={ select.label }
            selectedItem={ selectedItens[index] }
          />
        )) }
        <Input
          dataTestId={ DataInputs[3].dataTestId }
          type={ DataInputs[3].type }
          name={ DataInputs[3].name }
          placeholder={ DataInputs[3].placeholder }
          value={ descriptionInput }
          onChange={ this.handleChange }
          isDisabled={ false }
          label={ DataInputs[3].label }
        />
        { this.renderButton() }
      </fieldset>
    );
  }
}

FormEdit.propTypes = {
  setAllExpense: PropTypes.func.isRequired,
  getWallet: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setAllExpense: (payload) => dispatch(setAllWalletExpenses(payload)),
});

const mapStateToProps = (state) => ({
  getWallet: state.wallet,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormEdit);
