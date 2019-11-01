/**
 * @description Checks if the search is part of the input string in the given position
 * @params {string} [inputString] input string
 * @params {string) [searchString] search string
 * @params {number} [position] - check at given position
 * @return {boolean} Whether string2 is part of string1
 * @example
 * includes('Foo', 'oo') // returns true
 * includes('Foo', 'Foo', 2) // returns false
 */

const includes = (inputString, searchString, position = 0) =>
  !!(
    typeof inputString === 'string' &&
    typeof searchString === 'string' &&
    RegExp(searchString, 'g').test(inputString.substring(position))
  );

export default includes;
