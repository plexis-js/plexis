/**
 * @description Returns the number of words contained in the input text.
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
