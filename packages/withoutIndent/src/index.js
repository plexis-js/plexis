/**
 * @description Removes leading whitespaces from every line in the given string
 * @param {String} text
 * @param {Number} [removeUpTo] - Specifies how many whitespaces to remove
 * @example
 *
 * withoutIndent('\t\t\tHello World'); // returns 'Hello World'
 * withoutIndent('\n\tHello\n\tWorld'); // returns '\nHello\nWorld'
 * withoutIndent('\n\tHello\n\t\t\tWorld', 2); // returns '\nHello\n\tWorld'
 */
const withoutIndent = (text, removeUpTo) => {
  if (removeUpTo <= 0) return text;
  const howMany = typeof removeUpTo === 'number' ? `{1,${removeUpTo}}` : '+';
  const regex = new RegExp(`^[ \\t\\r]${howMany}|(?<=\\n+)[ \\t\\r]${howMany}`, 'g');
  return text.replace(regex, '');
};

export default withoutIndent;
