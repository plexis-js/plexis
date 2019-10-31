/**
 * @description Converts the first character of the input text to upper case. If the second parameter is true, the method converts the rest of the subject to lower case.
 * @param {String} text
 * @param {Boolean} isLowercase
 * @example
 * toPred('foo Bar') // returns 'Foo Bar'
 * toPred('fOO Bar') // returns 'FOO Bar'
 * toPred('fOO Bar', true) // returns 'Foo bar'
 */
const toCapitals = (text = '', isLowercase = false) => {
  let firstCharacter = text.charAt(0).toUpperCase();
  let restOfString = isLowercase ? text.slice(1).toLowerCase() : text.slice(1);

  return firstCharacter + restOfString;
};

export default toCapitals;
