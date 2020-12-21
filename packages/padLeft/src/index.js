/**
 * @description Pads the input text from right to a new length.
 * @param {String} string
 * @param {Number} size of the final string
 * @param {String} padding
 * @example
 * padLeft ('Foo Bar', 1); // => 'Foo Bar'
 * padLeft ('Foo Bar', 8); // => ' Foo Bar'
 * padLeft ('Foo Bar', 8, '*'); // => '*Foo Bar'
 * padLeft ('Foo Bar', 10, '*'); // => '***Foo Bar'
 * padLeft ('Foo Bar', 10, '123'); // => '123Foo Bar'
 * padLeft ('Foo Bar', 9, '123'); // => '12Foo Bar'
 */

const padLeft = (string = '', size = 0, padding = ' ') => {
  if (size <= string.length) {
    return string;
  }
  string = string.slice(0, size);
  while (string.length < size) {
    if (padding.length > size - string.length) {
      string = padding.slice(0, size - string.length) + string;
    } else {
      string = padding + string;
    }
  }
  string = string.slice(0, size);
  return string;
};

export default padLeft;
