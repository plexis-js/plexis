/**
 * @description Splits input text into an array of characters.
 * @param {String | Number} input
 * @returns {Array}
 * @example
 * toChars('Hello world'); // => [ "H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d" ]
 * toChars(2e5) // =>  ["2", "0", "0", "0", "0", "0"]
 */

const toChars = input => {
  if (!input) {
    return [];
  }
  return input.toString().split('');
};

export default toChars;
