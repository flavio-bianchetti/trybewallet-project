// Coloque aqui suas actions

// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

export const USER_EMAIL = 'USER_EMAIL';
export const USER_WALLET_CURRENCIES = 'USER_WALLET_CURRENCIES';
export const USER_WALLET_EXPENSES = 'USER_WALLET_EXPENSES';
export const USER_ALL_WALLET_EXPENSES = 'USER_ALL_WALLET_EXPENSES';

export const setUserEmail = (payload) => ({
  type: USER_EMAIL,
  payload,
});

const setWalletCurrencies = (payload) => ({
  type: USER_WALLET_CURRENCIES,
  payload,
});

export const setWalletExpenses = (payload) => ({
  type: USER_WALLET_EXPENSES,
  payload,
});

export const setAllWalletExpenses = (payload) => ({
  type: USER_ALL_WALLET_EXPENSES,
  payload,
});

export function fetchExchangeRates() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((payload) => dispatch(setWalletCurrencies(payload)))
    .catch((err) => console.log(err));
}
