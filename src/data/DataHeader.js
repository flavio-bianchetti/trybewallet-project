import DefaultValues from './DefaultValues';

const {
  defaultBGColor,
  defaultTextColor,
} = DefaultValues;

const DataHeader = {
  className: `${defaultBGColor} p-1 rounded-b-md w-auto shadow-md flex`,
  textColor: `${defaultTextColor} p-1`,
};

export default DataHeader;
