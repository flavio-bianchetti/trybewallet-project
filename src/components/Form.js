import React from 'react';
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
      // parei aqui.
    };
  }

  // carregar a página, pegar as moedas.
  //clicar no botão adicionar, gravar no store.

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <Input
          dataTestId={ DataInputs[2].dataTestId }
          type={ DataInputs[2].type }
          name={ DataInputs[2].name }
          placeholder={ DataInputs[2].placeholder }
          value={ DataInputs[2].value }
          onChange={ () => true }
          isDisabled={ false }
        />
        <Input
          dataTestId={ DataInputs[3].dataTestId }
          type={ DataInputs[3].type }
          name={ DataInputs[3].name }
          placeholder={ DataInputs[3].placeholder }
          value={ DataInputs[3].value }
          onChange={ () => true }
          isDisabled={ false }
        />
        <Select
          dataTestId={ DataSelect[0].dataTestId }
          name={ DataSelect[0].name }
          values={ DataSelect[0].values }
        />
        <Select
          dataTestId={ DataSelect[1].dataTestId }
          name={ DataSelect[1].name }
          values={ DataSelect[1].values }
        />
        <Select
          dataTestId={ DataSelect[2].dataTestId }
          name={ DataSelect[2].name }
          values={ DataSelect[2].values }
        />
        <Button
          dataTestId={ DataButtons[1].dataTestId }
          type={ DataButtons[1].type }
          name={ DataButtons[1].name }
          value={ DataButtons[1].value }
          onClick={ () => true }
          isDisabled={ false }
        />
      </form>
    );
  }
}

export default Form;
