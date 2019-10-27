/**
 * @description Converts a string into a human readable text
 * @param {String} text
 * @example
 * toHuman('foo') // returns 'Foo'
 * toHuman('foo     bar') // returns 'Foo bar'
 * toHuman(' foo-bar-baz qux       quux') // returns 'Foo bar baz qux quux'
 */
const toHuman = text =>
  text
    .trim()
    .replace(/_|-/g, ' ')
    .replace(/([A-Z])/g, word => ' ' + word.toLowerCase())
    .replace(/\b[A-Z][a-z]+\b/g, word => word.toLowerCase())
    .replace(/^[a-z]/g, first => first.toUpperCase())
    .replace(/\s\s+/g, ' ')
    .trim();

export default toHuman;
