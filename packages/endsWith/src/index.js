import isString from '@plexis/is-string';

/**
 * @description Checks whether the input text ends with the given pattern
 *
 * @param {String} text - String to be tested
 * @param {String|Regex} pattern - Pattern to be checked against text
 * @param {Number} startingPosition, optional - The position of the end of the string
 *
 * @example
 *
 * endsWith('This is me', 'is me') // true
 * endsWith('This is me', 'is m', ('This is me').length - 1) // true
 * endsWith('This is me', 'is m', ('This is me').length) // false
 * endsWith('This is me', 'Foo') // false
 */
const endsWith = (text, pattern, startingPosition = text.length) => {
  if (isString(pattern)) {
    return text.endsWith(pattern, startingPosition);
  }

  if (pattern instanceof RegExp) {
    const stringPattern = String(pattern);
    const flags = stringPattern.slice(stringPattern.lastIndexOf('/') + 1);

    const leadingAndTrailingSlashes = new RegExp(`(?:^\/|\/${flags}$)`, 'g');
    const internalRegexString = stringPattern.replace(leadingAndTrailingSlashes, '');
    const endsWithRegex = new RegExp(`${internalRegexString}$`, flags);

    return endsWithRegex.test(text.slice(0, startingPosition));
  }

  return false;
};

export default endsWith;
