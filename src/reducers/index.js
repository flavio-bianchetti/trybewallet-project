// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

import { USER_EMAIL } from './user';
import { USER_WALLET } from './wallet';

const INITIAL_STATE = ({
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
});

const walletReducer = (state = INITIAL_STATE, action) => {
  let result = {};
  switch (action.type) {
  case USER_EMAIL:
    result = {
      ...state,
      user: action.payload,
    };
    console.log(action.payload);
    break;
  case USER_WALLET:
    result = {
      ...state,
      wallet: action.payload,
    };
    break;
  default:
    result = state;
  }
  return result;
};

export default walletReducer;
