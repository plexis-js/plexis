/**
 * @description Inserts into the input text a string at specified position
 * @param {String} text
 * @param {String} textToInsert
 * @param {Number} insertPosition
 *
 * @example
 * insert('foo ba'); // returns  'foo ba'
 * insert('foo ba', "r"); // returns  'foo bar'
 * insert('foo ba', "r", 6); // returns  'foo bar'
 * insert('foo ba', "r", 100); // returns  'foo bar'
 * insert('foo ba', "r", -100); // returns  'foo bar'
 * insert('oo bar', "f", 0); // returns  'foo bar'
 */

const insert = (text = '', textToInsert = '', insertPosition = text.length) => {
  if (insertPosition < 0 || insertPosition > text.length || textToInsert === '') {
    return text + textToInsert;
  }
  return text.slice(0, insertPosition) + textToInsert + text.slice(insertPosition);
};

export default insert;
