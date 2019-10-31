/**
 * @description Checks if the search is part of the input string in the given position
 * @params {string} [inputString] input string
 * @params {string) [searchString] search string
 * @params {number} [position] - check at given position
 * @return {boolean} Whether string2 is part of string1
 * @example
 * isNumeric('1000') // returns true
 * isNumeric('Foo') // returns false
 */

const includes = (inputString = null, searchString = null, position = 0) =>
  !!(
    inputString !== null &&
    searchString !== null &&
    RegExp(searchString, 'g').test(inputString.substring(position))
  );

export default includes;
