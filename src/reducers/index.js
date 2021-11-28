// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

import USER_EMAIL from './user';
import {
  USER_WALLET_CURRENCIES,
  USER_WALLET_EXPENSES,
  USER_ALL_WALLET_EXPENSES,
} from './wallet';
import TOTAL_EXPENSES from './total';

const INITIAL_STATE = ({
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
  totalExpenses: 0,
});

const userEmail = (state, action) => ({
  ...state,
  user: action.payload,
});

const userWalletCurrencies = (state, action) => ({
  ...state,
  wallet: {
    currencies: action.payload,
    expenses: state.wallet.expenses,
  },
});

const userWalletExpenses = (state, action) => ({
  ...state,
  wallet: {
    currencies: state.wallet.currencies,
    expenses: [
      ...state.wallet.expenses,
      action.payload.expenses,
    ],
  },
  totalExpenses: action.payload.total,
});

const userAllWalletExpenses = (state, action) => ({
  ...state,
  wallet: {
    currencies: state.wallet.currencies,
    expenses: action.payload.expenses,
  },
  totalExpenses: action.payload.total,
});

const totalExpenses = (state, action) => ({
  ...state,
  totalExpenses: action.payload.total,
});

const walletReducer = (state = INITIAL_STATE, action) => {
  let result = {};
  switch (action.type) {
  case USER_EMAIL:
    result = userEmail(state, action);
    break;
  case USER_WALLET_CURRENCIES:
    result = userWalletCurrencies(state, action);
    break;
  case USER_WALLET_EXPENSES:
    result = userWalletExpenses(state, action);
    break;
  case USER_ALL_WALLET_EXPENSES:
    result = userAllWalletExpenses(state, action);
    break;
  case TOTAL_EXPENSES:
    result = totalExpenses(state, action);
    break;
  default: result = state;
  }
  return result;
};

export default walletReducer;
