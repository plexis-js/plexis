/**
 * @description This is a sample description
 * @param {String} text
 * @example
 * toPred('b') // returns 'a'
 * toPred('B') // returns 'A'
 * toPred('BCD') // returns 'ABC'
 */
const toPred = text =>
  text
    .split('')
    .map(s => String.fromCharCode(s.charCodeAt(0) - 1))
    .join('');

export default toPred;
