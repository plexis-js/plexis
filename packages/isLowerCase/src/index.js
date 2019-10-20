/**
 * @description Checks whether the input is a string containing only lowercase characters
 * @param {String} text
 * @example
 * isLowerCase('foo') // returns true
 * isLowerCase('Foo') // returns false
 * isLowerCase('BAR') // returns false
 */
const isLowerCase = text => text === text.toLowerCase();

export default isLowerCase;
