'use strict';

/**
 * Swaps lowercase to uppercase and vice versa for the input text.
 * @param {String} input
 * @returns {String} swaped text
 * @example
 * toSwapCase('Hello WORLD'); // => 'hELLO world'
 * toSwapCase('123 toys'); // => '123 TOYS'
 */
export default input => {
  let text = input.toString().split('');

  return text
    .map(c => {
      let lowerC = c.toLocaleLowerCase();
      return lowerC === c ? c.toLocaleUpperCase() : lowerC;
    })
    .join('');
};
