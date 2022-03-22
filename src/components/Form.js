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
import DataButtons from '../data/DataButtons';
import { setWalletExpenses, fetchExchangeRates } from '../actions/index';
import DataFieldset from '../data/DataFieldset';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      idExpense: '0',
      valueInput: '0',
      descriptionInput: '',
      currencyInput: 'USD',
      methodInput: 'Dinheiro',
      tagInput: 'Alimentação',
    };

    this.getTotalExpenses = this.getTotalExpenses.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateCurrencyInput = this.updateCurrencyInput.bind(this);
    this.removeCurrenciesNotValid = this.removeCurrenciesNotValid.bind(this);
    this.renderInput = this.renderInput.bind(this);
  }

  componentDidMount() {
    const { setExchangeRates } = this.props;
    setExchangeRates();
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

    const { getWallet, setExpense, setExchangeRates } = this.props;
    const { currencies } = getWallet;
    setExchangeRates();

    const expenses = {
      id: Number(idExpense),
      value: valueInput,
      description: descriptionInput,
      currency: currencyInput,
      method: methodInput,
      tag: tagInput,
      exchangeRates: currencies,
    };

    setExpense({ expenses });
    this.setState({
      idExpense: Number(idExpense) + 1,
      valueInput: '0',
    });
  }

  updateCurrencyInput() {
    const { getWallet } = this.props;
    const { currencies } = getWallet;
    DataSelect[0].values = Object.keys(this.removeCurrenciesNotValid(currencies));
  }

  removeCurrenciesNotValid(object) {
    // Solução abaixo foi relembrada através do link:
    // https://www.w3schools.com/howto/howto_js_remove_property_object.asp
    const newObject = { ...object };
    delete newObject.USDT;
    delete newObject.DOGE;
    return newObject;
  }

  renderInput(dataInputs, valueInput, handleChange) {
    return (
      <Input
        classNameLabel={ dataInputs.classNameLabel }
        classNameInput={ dataInputs.classNameInput }
        dataTestId={ dataInputs.dataTestId }
        type={ dataInputs.type }
        name={ dataInputs.name }
        placeholder={ dataInputs.placeholder }
        value={ valueInput }
        onChange={ handleChange }
        isDisabled={ false }
        label={ dataInputs.label }
      />
    );
  }

  render() {
    const { valueInput, descriptionInput,
      currencyInput, methodInput, tagInput } = this.state;
    const selectedItens = [currencyInput, methodInput, tagInput];
    this.updateCurrencyInput();
    return (
      <fieldset
        className={ DataFieldset[0].className }
      >
        { this.renderInput(DataInputs[2], valueInput, this.handleChange) }
        { DataSelect.map((select, index) => (
          <Select
            key={ index }
            classNameSelect={ select.classNameSelect }
            classNameLabel={ select.classNameLabel }
            dataTestId={ select.dataTestId }
            name={ select.name }
            values={ select.values }
            onChange={ this.handleChange }
            label={ select.label }
            selectedItem={ selectedItens[index] }
          />
        ))}
        { this.renderInput(DataInputs[3], descriptionInput, this.handleChange) }
        <Button
          className={ DataButtons[1].className }
          dataTestId={ DataButtons[1].dataTestId }
          type={ DataButtons[1].type }
          name={ DataButtons[1].name }
          value={ DataButtons[1].value }
          onClick={ this.handleClick }
          isDisabled={ false }
        />
      </fieldset>
    );
  }
}

Form.propTypes = {
  setExpense: PropTypes.func.isRequired,
  setExchangeRates: PropTypes.func.isRequired,
  getWallet: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setExpense: (payload) => dispatch(setWalletExpenses(payload)),
  setExchangeRates: () => dispatch(fetchExchangeRates()),
});

const mapStateToProps = (state) => ({
  getWallet: state.wallet,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
