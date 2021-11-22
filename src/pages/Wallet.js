// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

import React from 'react';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router';
// import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    // const { userEmail } = this.props;
    return (
      // <section>
      //   {
      //     userEmail.length > 0
      //       ? (
      <div>
        <Header />
        <Form />
        <Table />
      </div>
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

export default Wallet;
