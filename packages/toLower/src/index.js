/**
 * @description Lowercase the first letter of the given string.
 * @param {String} text
 * @param {Boolean} isLowercase
 * @example
 * toLower('Foo Bar', false) // returns 'foo Bar'
 * toLower('Foo Bar', true) // returns 'foo bar'
 */
const toLower = (text, isLower) => {
  const s = isLower ? text.slice(1).toLowerCase() : text.slice(1);
  return text.charAt(0).toLowerCase() + s;
};

export default toLower;
