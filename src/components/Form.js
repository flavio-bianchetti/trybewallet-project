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

    const { currencies, setExpense } = this.props;
    console.log(currencies);

    const expense = {
      id: idExpense,
      value: valueInput,
      description: descriptionInput,
      currency: currencyInput,
      method: methodInput,
      tag: tagInput,
      exchangesRates: currencies,
    };

    const total = Number(totalExpenses) + Number(valueInput);
    setExpense({ expense, total });
    this.setState({
      idExpense: Number(idExpense) + 1,
      totalExpenses: total,
    });
  }

  updateCurrencyInput() {
    const { currencies } = this.props;
    DataSelect[0].values = Object.keys(currencies);
    const indexRemove = DataSelect[0].values.indexOf('USDT');
    const validate = -1;
    if (indexRemove > validate) {
      DataSelect[0].values.splice(indexRemove, 1);
    }
  }

  render() {
    const {
      valueInput,
      descriptionInput,
    } = this.state;
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
        />
        <Input
          dataTestId={ DataInputs[3].dataTestId }
          type={ DataInputs[3].type }
          name={ DataInputs[3].name }
          placeholder={ DataInputs[3].placeholder }
          value={ descriptionInput }
          onChange={ this.handleChange }
          isDisabled={ false }
        />
        {
          DataSelect.map((select, index) => (
            <Select
              key={ index }
              dataTestId={ select.dataTestId }
              name={ select.name }
              values={ select.values }
              onChange={ this.handleChange }
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
  currencies: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setExpense: (payload) => dispatch(setWalletExpenses(payload)),
  setExchangeRates: () => dispatch(fetchExchangeRates()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
