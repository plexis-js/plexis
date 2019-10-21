/**
 * @description Converts a string to camel case
 * @param {String} text
 * @returns {String} camel case text
 * @example
 * toCamelCase('Cool'); //=> 'cool'
 * toCamelCase('cool mate'); // => 'coolMate'
 * toCamelCase('Hey how are you today?'); // => 'heyHowAreYouToday'
 * toCamelCase('PascalCase'); // => 'pascalCase'
 * toCamelCase('kebab-case'); // => kebabCase
 */

const toCamelCase = string => {
  const lowerUpper = (letter, index) => {
    return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
  };
  const wordPatt = /^\w|[A-Z]|\b\w/g;
  const symbolPatt = /[^a-zA-Z0-9]/g;
  let result = string
    .trim()
    .replace(wordPatt, lowerUpper)
    .replace(symbolPatt, '');
  return result;
};

export default toCamelCase;
