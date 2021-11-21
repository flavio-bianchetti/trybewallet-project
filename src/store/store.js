// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import walletReducer from '../reducers/index';

const store = createStore(
  walletReducer,
  // utilizado o composeWithDevTolls conforme explicado em aula. Foi feita
  // também consulta adicional a este site, para ajustes ao código:
  // https://stackoverflow.com/questions/50385592/how-to-apply-redux-developer
  // -tools-with-reduxthunk
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
