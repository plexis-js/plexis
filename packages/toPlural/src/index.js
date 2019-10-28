/**
 * @description Converts a word to its plural form
 * @param {String} word
 * @param {String} pluralForm
 * @param {Number} count
 * @returns {String} pluralized word
 * @example
 * toPlural('example'); // => 'examples'
 * toPlural('example', 10); // => 'examples'
 * toPlural('example', 1); // => 'example'
 * toPlural('example', 'examplez', 10); // => 'examplez'
 * toPlural('example', 'examplez', 1); // => 'example'
 */

const toPlural = (word, ...rest) => {
  if (rest.length === 1 && typeof rest[0] === 'string') return word;

  const isPlural = rest.length === 0 || Math.abs(rest[rest.length - 1]) !== 1;
  const pluralForm = rest.length === 2 ? rest[0] : `${word}s`;

  return isPlural ? pluralForm : word;
};

export default toPlural;
