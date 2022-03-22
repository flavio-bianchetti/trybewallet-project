// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

import DefaultValues from './DefaultValues';

const {
  defaultTextColor,
  defaultContrastBGColor,
  defaultBorderFocusColor,
  defaultContrastTextColor,
} = DefaultValues;

const labelValues = `${defaultTextColor} m-2 p-1`;
const selectValues = `${defaultContrastBGColor} border rounded-md m-2
focus:outline-none ${defaultBorderFocusColor} focus:ring-1
text-sm ${defaultContrastTextColor}`;

const DataSelect = [
  {
    classNameLabel: labelValues,
    classNameSelect: selectValues,
    dataTestId: 'currency-input',
    name: 'currencyInput',
    values: [],
    label: 'Moeda: ',
  },
  {
    classNameLabel: labelValues,
    classNameSelect: selectValues,
    dataTestId: 'method-input',
    name: 'methodInput',
    values: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
    label: 'Método de Pagamento: ',
  },
  {
    classNameLabel: labelValues,
    classNameSelect: selectValues,
    dataTestId: 'tag-input',
    name: 'tagInput',
    values: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
    label: 'Tag: ',
  },
];

export default DataSelect;
