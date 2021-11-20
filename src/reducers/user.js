// Esse reducer será responsável por tratar as informações da pessoa usuária

// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

export const USER_EMAIL = 'USER_EMAIL';

export const setUserEmail = (payload) => ({
  type: USER_EMAIL,
  payload,
});
