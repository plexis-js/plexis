/**
 * @description Uppercase the first letter of the given string.
 * @param {String} text
 * @param {Boolean} isLowercase
 * @example
 * toCapitals('foo Bar', false); // returns 'Foo Bar'
 * toCapitals('fOO Bar', true); // returns 'Foo bar'
 */
const toCapitals = (text, isLower) => {
  const s = isLower ? text.slice(1).toLowerCase() : text.slice(1);
  return text.charAt(0).toUpperCase() + s;
};

export default toCapitals;
