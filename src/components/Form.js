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

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      idExpense: '0',
      totalExpenses: '0',
      valueInput: '0',
      descriptionInput: '',
      currencyInput: 'USD',
      methodInput: 'Dinheiro',
      tagInput: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateCurrencyInput = this.updateCurrencyInput.bind(this);
    this.removeCurrenciesNotValid = this.removeCurrenciesNotValid.bind(this);
  }

  componentDidMount() {
    const { setExchangeRates } = this.props;
    setExchangeRates();
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
      totalExpenses,
      valueInput,
      descriptionInput,
      currencyInput,
      methodInput,
      tagInput,
    } = this.state;

    const { currencies, setExpense, setExchangeRates } = this.props;
    setExchangeRates();

    const expense = {
      id: Number(idExpense),
      value: valueInput,
      description: descriptionInput,
      currency: currencyInput,
      method: methodInput,
      tag: tagInput,
      exchangeRates: currencies,
    };

    const valueAsk = expense.exchangeRates[currencyInput].ask;

    const total = Number(totalExpenses)
      + (Number(valueInput) * Number(valueAsk)).toFixed(2);
    setExpense({ expense, total });
    this.setState({
      idExpense: Number(idExpense) + 1,
      totalExpenses: total,
      valueInput: '0',
    });
  }

  updateCurrencyInput() {
    const { currencies } = this.props;
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

  render() {
    const { valueInput, descriptionInput } = this.state;
    this.updateCurrencyInput();
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
        {
          DataSelect.map((select, index) => (
            <Select
              key={ index }
              dataTestId={ select.dataTestId }
              name={ select.name }
              values={ select.values }
              onChange={ this.handleChange }
              label={ select.label }
            />
          ))
        }
        <Button
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
  // warning na linha abaixo será tratado antes da entrega final.
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setExpense: (payload) => dispatch(setWalletExpenses(payload)),
  setExchangeRates: () => dispatch(fetchExchangeRates()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
