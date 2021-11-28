// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

import {
  USER_WALLET_CURRENCIES,
  USER_WALLET_EXPENSES,
  USER_ALL_WALLET_EXPENSES,
} from '../actions/index';

const INITIAL_STATE = ({
  currencies: [],
  expenses: [],
});

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_WALLET_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case USER_WALLET_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload.expenses,
      ],
    };
  case USER_ALL_WALLET_EXPENSES:
    return {
      ...state,
      currencies: action.payload.currencies,
      expenses: action.payload.expenses,
    };
  default:
    return state;
  }
};

export default wallet;
