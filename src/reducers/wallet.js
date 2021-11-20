// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

export const USER_WALLET = 'USER_WALLET';

export const setUserWallet = (payload) => ({
  type: USER_WALLET,
  payload,
});
