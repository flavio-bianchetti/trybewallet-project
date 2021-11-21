// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DataInputs from '../data/DataInputs';
import DataButtons from '../data/DataButtons';
import Input from '../elements/Input';
import Button from '../elements/Button';
import { setUserEmail } from '../reducers/user';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      passwordInput: '',
      isEmailValid: false,
      isPasswordValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.enableButton = this.enableButton.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, this.enableButton);
  }

  handleClick(event) {
    event.preventDefault();
    const { email } = this.state;
    const { history, userEmail } = this.props;
    userEmail({ email });
    history.push('/carteira');
  }

  enableButton() {
    const minLength = 6;
    const {
      email,
      passwordInput,
    } = this.state;
    // solução para a validação do e-mail com Regex. Disponível em:
    // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-
    // para-valida%C3%A7%C3%A3o-de-e-mail
    const emailPattern = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    this.setState({
      isEmailValid: emailPattern.test(email),
      isPasswordValid: (passwordInput.length >= minLength),
    });
  }

  render() {
    const {
      email,
      passwordInput,
      isEmailValid,
      isPasswordValid,
    } = this.state;
    return (
      <div>
        Login:
        <Input
          dataTestId={ DataInputs[0].dataTestId }
          type={ DataInputs[0].type }
          name={ DataInputs[0].name }
          placeholder={ DataInputs[0].placeholder }
          value={ email }
          onChange={ this.handleChange }
          isDisabled={ false }
        />
        <Input
          dataTestId={ DataInputs[1].dataTestId }
          type={ DataInputs[1].type }
          name={ DataInputs[1].name }
          placeholder={ DataInputs[1].placeholder }
          value={ passwordInput }
          onChange={ this.handleChange }
          isDisabled={ false }
        />
        <Button
          dataTestId={ DataButtons[0].dataTestId }
          type={ DataButtons[0].type }
          name={ DataButtons[0].name }
          value={ DataButtons[0].value }
          isDisabled={ !(isEmailValid && isPasswordValid) }
          onClick={ this.handleClick }
        />
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  userEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userEmail: (payload) => dispatch(setUserEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
