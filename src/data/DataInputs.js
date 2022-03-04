// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

import DefaultValues from './DefaultValues';

const {
  defaultBGColor,
  defaultTextBGColor,
  defaultBGWhite,
  defaultBorderFocusColor,
  defaultTextColor,
} = DefaultValues;

const DataInputs = [
  {
    classNameLabel: `${defaultBGColor} ${defaultTextBGColor}
    m-2 p-1 rounded-md w-64 shadow-md`,
    classNameInput: `placeholder:italic placeholder:text-slate-300
    block ${defaultBGWhite} w-56 border shadow-sm rounded-md pl-2 m-2
    focus:outline-none focus:${defaultBorderFocusColor} focus:ring-1
    text-sm ${defaultTextColor}`,
    dataTestId: 'email-input',
    type: 'email',
    name: 'email',
    placeholder: 'e-mail',
    value: '',
    label: 'E-mail: ',
  },
  {
    classNameLabel: `${defaultBGColor} ${defaultTextBGColor}
    m-2 p-1 rounded-md w-64 shadow-md`,
    classNameInput: `placeholder:italic placeholder:text-slate-300
    block ${defaultBGWhite} w-56 border shadow-sm rounded-md pl-2 m-2
    focus:outline-none focus:${defaultBorderFocusColor} focus:ring-1
    text-sm ${defaultTextColor}`,
    dataTestId: 'password-input',
    type: 'password',
    name: 'passwordInput',
    placeholder: 'password',
    value: '',
    label: 'Senha: ',
  },
  {
    classNameLabel: '',
    classNameInput: '',
    dataTestId: 'value-input',
    type: 'number',
    name: 'valueInput',
    placeholder: 'valor',
    value: '',
    label: 'Valor: ',
  },
  {
    classNameLabel: '',
    classNameInput: '',
    dataTestId: 'description-input',
    type: 'text',
    name: 'descriptionInput',
    placeholder: 'descrição',
    value: '',
    label: 'Descrição: ',
  },
];

export default DataInputs;
