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
import { setUserWalletExpenses } from '../actions/index';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      idExpense: '0',
      totalExpenses: '0',
      valueInput: '0',
      descriptionInput: '',
      currencyInput: '',
      methodInput: '',
      tagInput: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // ao carregar a página, pegar as moedas.
  // componentDidMount() {

  // }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // clicar no botão adicionar, gravar no store.
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

    const expense = {
      id: idExpense,
      value: valueInput,
      description: descriptionInput,
      currency: currencyInput,
      method: methodInput,
      tag: tagInput,
    };

    const { setExpense } = this.props;
    const total = Number(totalExpenses) + Number(valueInput);
    setExpense({ expense, total });
    this.setState({
      idExpense: Number(idExpense) + 1,
      totalExpenses: total,
    });
  }

  render() {
    const {
      valueInput,
      descriptionInput,
    } = this.state;
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
};

const mapDispatchToProps = (dispatch) => ({
  setExpense: (payload) => dispatch(setUserWalletExpenses(payload)),
});

export default connect(null, mapDispatchToProps)(Form);
