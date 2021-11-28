// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      dataTestId,
      name,
      values,
      onChange,
      label,
      selectedItem,
    } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <select
          data-testid={ dataTestId }
          name={ name }
          id={ name }
          onChange={ onChange }
        >
          {
            values.map((value, index) => (
              <option
                key={ index }
                data-testid={ value }
                value={ value }
                selected={ selectedItem === value }
              >
                { value }
              </option>
            ))
          }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  selectedItem: PropTypes.string.isRequired,
};

export default Select;
