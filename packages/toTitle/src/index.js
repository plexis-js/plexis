/**
 * @description Converts a string to a title, capitalizes the first letter of each word.
 * @param {String} text
 * @example
 * toTitle('this is cool mate') // returns 'This Is Cool Mate'
 */
const toTitle = text =>
  text
    .toLowerCase()
    .split(' ')
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

export default toTitle;
