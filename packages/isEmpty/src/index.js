/**
 * @description Checks whether the input text is empty
 * @param {String} text
 * @example
 * isEmpty('') // returns true
 * isEmpty('   ') // returns true
 * isEmpty(' b  ') // returns false
 */
const isEmpty = text => /^\s*$/.test(text);

export default isEmpty;
