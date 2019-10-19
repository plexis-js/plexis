/**
 * @description Converts a string to its equivalent successor
 * @param {String} text
 * @example
 * toSucc('a') // returns 'b'
 * toSucc('A') // returns 'B'
 * toSucc('ABCD') // returns 'BCDE'
 */

const toSucc = text =>
  text
    .split('')
    .map(s => String.fromCharCode(s.charCodeAt(0) + 1))

    .join('');

export default toSucc;
