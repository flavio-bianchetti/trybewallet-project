// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      dataTestId,
      name,
      type,
      placeholder,
      value,
      isDisabled,
      onChange,
    } = this.props;
    return (
      <input
        data-testid={ dataTestId }
        name={ name }
        type={ type }
        placeholder={ placeholder }
        value={ value }
        disabled={ isDisabled }
        onChange={ onChange }
      />
    );
  }
}

Input.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;