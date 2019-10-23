/**
 * @description Checks whether the input is a string containing only uppercase characters
 * @param {String} text
 * @example
 * isUpperCase️('b') // returns false
 * isUpperCase️('B') // returns true
 * isUpperCase️('BCD') // returns true
 */
const isUpperCase️ = text => text === text.toUpperCase();

export default isUpperCase️;
