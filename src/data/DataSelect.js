// A lógica aplicada neste arquivo foi elaborada conforme aprendizados no curso
// da Trybe, consultas às documentações oficiais e com conhecimentos prévios do
// autor. Demais consultas serão discriminadas abaixo em forma de link.

const DataSelect = [
  {
    dataTestId: 'currency-input',
    name: 'currencyInput',
    values: [],
    label: 'Moeda: ',
  },
  {
    dataTestId: 'method-input',
    name: 'methodInput',
    values: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
    label: 'Método de Pagamento: ',
  },
  {
    dataTestId: 'tag-input',
    name: 'tagInput',
    values: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
    label: 'Tag: ',
  },
];

export default DataSelect;
