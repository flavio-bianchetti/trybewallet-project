// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

import DefaultValues from './DefaultValues';

const {
  defaultBGColor,
  defaultBGColorHover,
} = DefaultValues;

const DataButtons = [
  {
    className: `${defaultBGColor} m-2 p-1 rounded-md w-64 shadow-md
      holver:outline-none hover:${defaultBGColorHover} text-white`,
    dataTestId: 'button-login-input',
    type: 'button',
    name: 'buttonLoginInput',
    value: 'Entrar',
  },
  {
    className: '',
    dataTestId: 'button-add-expense-input',
    type: 'button',
    name: 'buttonAddExpenseInput',
    value: 'Adicionar despesa',
  },
  {
    className: '',
    dataTestId: 'delete-btn',
    type: 'button',
    name: 'deleteBtn',
    value: 'Remover',
  },
  {
    className: '',
    dataTestId: 'edit-btn',
    type: 'button',
    name: 'editBtn',
    value: 'Editar',
  },
];

export default DataButtons;
