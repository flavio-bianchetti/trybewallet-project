// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

import React from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form from '../components/Form';
import FormEdit from '../components/FormEdit';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: -1,
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      isChanging: false,
    };
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleEditClick(event) {
    event.preventDefault();
    const { name } = event.target;
    if (name) {
      const { getExpenses } = this.props;
      const selectExpense = getExpenses.find(
        (expense) => expense.id === Number(name),
      );
      this.setState({
        id: selectExpense.id,
        value: selectExpense.value,
        description: selectExpense.description,
        currency: selectExpense.currency,
        method: selectExpense.method,
        tag: selectExpense.tag,
        isChanging: true,
      });
    }
  }

  render() {
    // const { userEmail } = this.props;
    const {
      id,
      value,
      description,
      currency,
      method,
      tag,
      isChanging,
    } = this.state;
    return (
      // <section>
      //   {getExpenses: PropTypes.arr.isRequired,
      <section>
        <Header />
        {
          isChanging
            ? (
              <FormEdit
                id={ id }
                value={ value }
                description={ description }
                currency={ currency }
                method={ method }
                tag={ tag }
              />
            )
            : (
              <Form />
            )
        }
        <Table
          handleEditClick={ this.handleEditClick }
        />
      </section>
      //       )
      //       : <Redirect to="/" />
      //   }
      // </section>
    );
  }
}

// Wallet.propTypes = {
//   userEmail: PropTypes.string.isRequired,
// };

// const mapStateToProps = (state) => ({
//   userEmail: state.user.email,
// });

// export default connect(mapStateToProps, null)(Wallet);

Wallet.propTypes = {
  getExpenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  getExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Wallet);
