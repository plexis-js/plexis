/**
 * @description This is a sample description
 * @param {String} text
 * @example
 * insert('foo ba'); // returns  'foo ba'
 * insert('foo ba', "r"); // returns  'foo bar'
 * insert('foo ba', "r", 6); // returns  'foo bar'
 * insert('foo ba', "r", 100); // returns  'foo bar'
 * insert('foo ba', "r", -100); // returns  'foo bar'
 * insert('oo bar', "", 0); // returns  'foo bar'
 */

const insert = (text = '', textToInsert = '', position = text.length) => {
  if (position < 0 || position > text.length || textToInsert === '') {
    return text + textToInsert;
  }
  return text.slice(0, position) + textToInsert + text.slice(position);
};

export default insert;
