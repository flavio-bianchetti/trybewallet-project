// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

import DefaultValues from './DefaultValues';

const {
  defaultBGColor,
  defaultBGColorHover,
  mediumBGColor,
  mediumBGColorHover,
} = DefaultValues;

const DataButtons = [
  {
    className: `${defaultBGColor} m-2 p-1 rounded-md w-64 shadow-md
    hover:outline-none ${defaultBGColorHover} text-white`,
    dataTestId: 'button-login-input',
    type: 'button',
    name: 'buttonLoginInput',
    value: 'Entrar',
  },
  {
    className: `${mediumBGColor} m-2 p-1 rounded-md w-42 shadow-md
    hover:outline-none ${mediumBGColorHover} text-white`,
    dataTestId: 'button-add-expense-input',
    type: 'button',
    name: 'buttonAddExpenseInput',
    value: 'Adicionar despesa',
  },
  {
    className: `${defaultBGColor} m-2 p-1 rounded-md shadow-md
    hover:outline-none ${defaultBGColorHover} text-white`,
    dataTestId: 'delete-btn',
    type: 'button',
    name: 'deleteBtn',
    value: 'Remover',
  },
  {
    className: `${defaultBGColor} m-2 p-1 rounded-md shadow-md
    hover:outline-none ${defaultBGColorHover} text-white`,
    dataTestId: 'edit-btn',
    type: 'button',
    name: 'editBtn',
    value: 'Editar',
  },
];

export default DataButtons;
