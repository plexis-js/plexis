/**
 * @description Checks whether the input is a string containing only alphanumeric characters
 * @param {String} text
 * @example
 * isAlphaNumeric('fooBAR') // returns true
 * isAlphaNumeric('123') // returns true
 * isAlphaNumeric('foo123BAR') // returns true
 * isAlphaNumeric('1.0') // returns false
 * isAlphaNumeric('bar!') // returns false
 * isAlphaNumeric('') // returns false
 */
const isAlphaNumeric = text => typeof text === 'string' ? /^[A-Za-z0-9]+$/.test(text) : false;

export default isAlphaNumeric;
