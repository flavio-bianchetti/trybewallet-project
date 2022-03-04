// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const {
      dataTestId,
      name,
      type,
      value,
      isDisabled,
      onClick,
      className,
    } = this.props;
    return (
      <input
        className={ className }
        data-testid={ dataTestId }
        name={ name }
        type={ type }
        value={ value }
        disabled={ isDisabled }
        onClick={ onClick }
      />
    );
  }
}

Button.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
