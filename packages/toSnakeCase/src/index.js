/**
 * @description Converts a string to snake case
 * @param {String} text
 * @returns {String} snake case text
 * @example
 * toSnakeCase('Cool') => 'cool'
 * toSnakeCase('cool mate') => 'cool_mate'
 * toSnakeCase('Hey how are you today?') => 'hey_how_are_you_today'
 * toSnakeCase('PascalCase') => 'pascal_case'
 * toSnakeCase('kebab-case') => 'kebab_case'
 */

const toSnakeCase = string => {
  const removeSym = (letter, index, string) => {
    return string.length - 1 === index ? '' : '_';
  };
  const pascalAndCamelParser = l => {
    return (l[0] + '_' + l[1]).toLowerCase();
  };

  const wordPatt = /[\w]([A-Z])/g;
  const symbolPatt = /[^a-zA-Z0-9]/g;
  let result = string
    .trim()
    .replace(wordPatt, pascalAndCamelParser)
    .replace(symbolPatt, removeSym)
    .toLowerCase();

  return result;
};

export default toSnakeCase;
