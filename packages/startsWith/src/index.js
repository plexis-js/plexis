/**
 * @description Checks whether the input text starts with the given pattern.
 * @param {String} text
 * @param {String|Regex} pattern
 * @param {Number} startingPosition, optional
 * @example
 * startsWith('This is me', 'This is'); // returns true
 * startsWith('This is me', 'This is', 1); // returns false
 * startsWith(/[@!#$]/, '@plexis is great!'); // returns true
 */
const startsWith = (text, pattern, startingPosition) => {
  try {
    if (typeof pattern === 'object') {
      return text.slice(startingPosition).search(new RegExp(pattern)) === 0 ? true : false;
    }
  } catch (e) {}

  return text.slice(startingPosition).indexOf(pattern) === 0 ? true : false;
};

export default startsWith;
