// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

import USER_EMAIL from './user';
import { USER_WALLET_CURRENCIES, USER_WALLET_EXPENSES } from './wallet';

const INITIAL_STATE = ({
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
  totalExpenses: '0',
});

const walletReducer = (state = INITIAL_STATE, action) => {
  let result = {};
  switch (action.type) {
  case USER_EMAIL:
    result = {
      ...state,
      user: action.payload,
    };
    break;
  case USER_WALLET_CURRENCIES:
    result = {
      ...state,
      wallet: {
        currencies: action.payload,
        expenses: state.wallet.expenses,
      },
    };
    break;
  case USER_WALLET_EXPENSES:
    result = {
      ...state,
      wallet: {
        currencies: state.wallet.currencies,
        expenses: [
          ...state.wallet.expenses,
          action.payload.expense,
        ],
      },
      totalExpenses: action.payload.total,
    };
    break;
  default:
    result = state;
  }
  return result;
};

export default walletReducer;
