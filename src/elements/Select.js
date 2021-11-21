import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      dataTestId,
      name,
      values,
    } = this.props;
    return (
      <select
        data-testid={ dataTestId }
        name={ name }
      >
        {
          values.map((value, index) => (
            <option
              key={ index }
              value={ value }
            >
              { value }
            </option>
          ))
        }
      </select>
    );
  }
}

Select.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
