const regExps = [
  /^-?\d+$/,
  /^-?\d+\.?([eE][\+\-]?\d+)?$/,
  /^-?\d*\.?\d+([eE][\+\-]?\d+)?$/,
  /^0x[0-9a-fA-F]+$/,
  /^Infinity$/
];

/**
 * @description Checks whether the input is a string representation of a numeric value.
 * @param {String} text
 * @example
 * isNumeric('1') // returns true
 * isNumeric('1.5') // returns true
 * isNumeric('1E-2') // returns true
 * isNumeric('Foo') // returns false
 * isNumeric('BAR') // returns false
 */
const isNumeric = text => regExps.some(regExp => regExp.test(text));

export default isNumeric;
