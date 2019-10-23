// to be replaced with @plexis/toCamelCase
const toCamelCase = text => {
  const lowerUpper = (letter, index) => {
    return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
  };
  const wordPatt = /^\w|[A-Z]|\b\w/g;
  const symbolPatt = /[^a-zA-Z0-9]/g;
  return text
    .trim()
    .replace(wordPatt, lowerUpper)
    .replace(symbolPatt, '');
};

/**
 * @description Convert a word to pascal case
 * @param {String} text
 * @example
 * toPascalCase('foo') // returns 'Foo'
 * toPred('foo bar') // returns 'FooBar'
 * toPred('FOO BAR BAZ') // returns 'FooBarBaz'
 */
const toPascalCase = text => {
  const result = toCamelCase(text);
  return result.charAt(0).toUpperCase() + result.substr(1);
};

export default toPascalCase;
