/**
 * @description Extracts the last length characters from the input text
 * @param {String} text
 * @param {Number} endingPosition, optional
 * @example
 * tail(); // returns ''
 * tail('Hello'); // returns 'o'
 * tail('Hello', 2); // returns 'lo'
 * tail('Hello', 100); // returns 'Hello'
 */

const tail = (text, endingPosition = 1) =>
  text ? text.substring(text.length - endingPosition) : '';

export default tail;
