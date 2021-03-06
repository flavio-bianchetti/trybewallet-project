// Esse reducer será responsável por tratar as informações da pessoa usuária

// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

import { USER_EMAIL } from '../actions/index';

const INITIAL_STATE = ({
  email: '',
});

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_EMAIL:
    return {
      ...state,
      email: action.payload.email,
    };
  default:
    return state;
  }
};

export default user;
