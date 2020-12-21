/**
 * @description Pads the input text from right to a new length.
 * @param {String} string
 * @param {Number} size of the final string
 * @param {String} padding
 * @example
 * padRight ('Foo Bar', 1); // => 'Foo Bar'
 * padRight ('Foo Bar', 8); // => 'Foo Bar '
 * padRight ('Foo Bar', 8, '*'); // => 'Foo Bar*'
 * padRight ('Foo Bar', 10, '*'); // => 'Foo Bar***'
 * padRight ('Foo Bar', 10, '123'); // => 'Foo Bar123'
 * padRight ('Foo Bar', 9, '123'); // => 'Foo Bar12'
 */

const padRight = (string = '', size = 0, padding = ' ') => {
  if (size <= string.length) {
    return string;
  }
  string = string.slice(0, size);
  while (string.length < size) {
    string += padding;
  }
  string = string.slice(0, size);
  return string;
};

export default padRight;
