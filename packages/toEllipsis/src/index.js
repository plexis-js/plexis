/**
 * @description Truncates the input text to the desired length.
 * @param {String} string
 * @param {Number} limit
 * @example
 * toEllipsis('foo'); //=> 'foo'
 * toEllipsis('foo', 1); // => 'f..'
 * toEllipsis('foo', 3); // => 'foo'
 * toEllipsis('Last night I dreamt I went to Manderley again.', 5);  // => 'Last ...'
 */

const toEllipsis = (string, limit) => {
  if (isNaN(limit)) return string;
  const suffix = string.length <= limit ? '' : '...';
  return string.substring(0, limit) + suffix;
};

export default toEllipsis;
