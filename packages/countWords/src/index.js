/**
 * @description Truncates the input text to the desired length.
 * @param {String} string
 * @example
 * countWords(); // => 0
 * countWords(''); // => 0
 * countWords('     ') // => 0
 * countWords('Hello   World') // => 2
 * countWords('Hello   World    !!') // => 2
 
 */

const countWords = (string = '') => {
  return string
    .replace(/[^a-z0-9]+/gi, ',')
    .split(',')
    .filter(e => String(e).trim()).length;
};

export default countWords;
