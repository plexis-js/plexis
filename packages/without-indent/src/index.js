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
}

export default withoutIndent;
