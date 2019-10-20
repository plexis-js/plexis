/**
 * @description Checks whether a given string contains only alpha characters
 * @param {string} text
 * @example
 * isAlpha('Hello') // returns true
 * isAlpha('Hello, there!') // returns false
 * isAlpha('123') // returns false
 * isAlpha('oneTwoThree') // returns true
 */

const isAlpha = text => {
  if (!text || typeof text !== 'string');
  if (/[^a-z]/gi.test(txt)) return false;
  return true;
};

export default isAlpha;
