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

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      idExpense: -1,
      valueInput: '0',
      descriptionInput: '',
      currencyInput: 'USD',
      methodInput: 'Dinheiro',
      tagInput: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.updateCurrencyInput = this.updateCurrencyInput.bind(this);
    this.removeCurrenciesNotValid = this.removeCurrenciesNotValid.bind(this);
    this.setFieldsForEdit = this.setFieldsForEdit.bind(this);
  }

  componentDidMount() {
    this.setFieldsForEdit();
  }

  setFieldsForEdit() {
    const { id, value, description, currency, method, tag } = this.props;
    this.setState({
      idExpense: id,
      valueInput: value,
      descriptionInput: description,
      currencyInput: currency,
      methodInput: method,
      tagInput: tag,
    });
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

    const { getExpenses, getTotalExpenses } = this.props;

    const selectedExpense = getExpenses.find(
      (expense) => expense.id === idExpense,
    );

    let valueAsk = selectedExpense.exchangeRates[selectedExpense.currency].ask;

    const total = Number(getTotalExpenses)
    - Number((Number(selectedExpense.value)
    * Number(valueAsk)).toFixed(2));

    const changedExpense = {
      id: Number(idExpense),
      value: valueInput,
      description: descriptionInput,
      currency: currencyInput,
      method: methodInput,
      tag: tagInput,
      exchangeRates: selectedExpense.currencies,
    };

    valueAsk = changedExpense.exchangeRates[currencyInput].ask;

    const newTotal = total + Number((Number(valueInput)
    * Number(valueAsk)).toFixed(2));

    // const newExpenses = getExpenses.map(
    //   (expense) => expense.id === changedExpense.id ? changedExpense : expense
    // );
    console.log(changedExpense, newTotal);
    // setExpense({ expense, total });
    // this.setState({
    //   idExpense: Number(idExpense) + 1,
    //   valueInput: '0',
    // });
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
    const { idExpense, valueInput, descriptionInput, currencyInput,
      methodInput, tagInput } = this.state;
    const selectValues = [currencyInput, methodInput, tagInput];
    console.log(selectValues); // parei aqui.
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
          name={ idExpense }
          value={ DataButtons[1].value }
          onClick={ this.handleClick }
          isDisabled={ false }
        />
      </fieldset>
    );
  }
}

Form.propTypes = {
//   setExpense: PropTypes.func.isRequired,
//   setExchangeRates: PropTypes.func.isRequired,
  // warning na linha abaixo será tratado antes da entrega final.
//   currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  getTotalExpenses: PropTypes.number.isRequired,
  // changingId: PropTypes.number.isRequired,
  getExpenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

// const mapDispatchToProps = (dispatch) => ({
// //   setExpense: (payload) => dispatch(setWalletExpenses(payload)),
// //   setExchangeRates: () => dispatch(fetchExchangeRates()),
// });

const mapStateToProps = (state) => ({
//   currencies: state.wallet.currencies,
  getTotalExpenses: state.totalExpenses,
  // changingId: state.changingId,
  getExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Form);
