/**
 * @description Converts a string to kebab case
 * @param {String} text
 * @example
 * toKebabCase('Cool'); // returns 'cool'
 * toKebabCase('cool mate'); // returns 'cool-mate'
 * toKebabCase('Hey how are you today?'); // returns 'hey-how-are-you-today'
 * toKebabCase('camelCase'); // returns 'camel-case'
 * toKebabCase('PascalCase'); // returns 'pascal-case'
 */
const toKebabCase = text =>
  text
    .replace(/(?<=\w)[A-Z]/g, str => ' ' + str)
    .replace(/\ /g, '-')
    .replace(/([^A-Za-z0-9|-])/g, '')
    .toLowerCase();

export default toKebabCase;
