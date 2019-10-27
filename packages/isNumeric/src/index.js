/**
 * @description Checks whether the argument given is a number
 * @param {Any} value to validate
 * @return {boolean} Whether the argument passed was a number or not
 * @example
 * isNumeric('1000') // returns true
 * isNumeric('Foo') // returns false
 */

const isNumeric = value => !isNaN(Number(value));

export default isNumeric;
