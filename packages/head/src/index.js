/**
 * @description Extracts the first length characters from the input text.
 * @param {String} text
 * @param {Number} length
 * @example
 * head(); // => ''
 * head('Hello'); // => 'H'
 * head('Hello', 2); // => 'He'
 * head('Hello', 100); // => 'Hello'
 */
const head = (text = '', length = 1) => {
  if (typeof text !== 'string') {
    throw new Error('Input text must be of type string');
  }

  if (isNaN(length) || typeof length !== 'number') {
    throw new Error('Length characters must be of type number');
  }

  return text.substr(0, length);
};

export default head;
