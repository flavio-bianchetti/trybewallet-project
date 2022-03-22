// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

import DefaultValues from './DefaultValues';

const {
  defaultBGColor,
  defaultTextColor,
  defaultContrastBGColor,
  defaultBorderFocusColor,
  defaultContrastTextColor,
} = DefaultValues;

const labelValues = 'm-2 p-1 rounded-md w-64';
const inputValues = `placeholder:italic placeholder:text-slate-300
${defaultContrastBGColor} border shadow-sm rounded-md pl-2 m-2
focus:outline-none ${defaultBorderFocusColor} focus:ring-1
text-sm ${defaultContrastTextColor}`;

const DataInputs = [
  {
    classNameLabel: `${defaultBGColor} ${defaultTextColor} ${labelValues}  shadow-md`,
    classNameInput: `${inputValues} w-56`,
    dataTestId: 'email-input',
    type: 'email',
    name: 'email',
    placeholder: 'e-mail',
    value: '',
    label: 'E-mail: ',
  },
  {
    classNameLabel: `${defaultBGColor} ${defaultTextColor} ${labelValues}  shadow-md`,
    classNameInput: `${inputValues} w-56`,
    dataTestId: 'password-input',
    type: 'password',
    name: 'passwordInput',
    placeholder: 'password',
    value: '',
    label: 'Senha: ',
  },
  {
    classNameLabel: `${defaultTextColor} ${labelValues}`,
    classNameInput: `${inputValues} w-24`,
    dataTestId: 'value-input',
    type: 'number',
    name: 'valueInput',
    placeholder: 'valor',
    value: '',
    label: 'Valor: ',
  },
  {
    classNameLabel: `${defaultTextColor} ${labelValues}`,
    classNameInput: `${inputValues} w-56`,
    dataTestId: 'description-input',
    type: 'text',
    name: 'descriptionInput',
    placeholder: 'descrição',
    value: '',
    label: 'Descrição: ',
  },
];

export default DataInputs;
