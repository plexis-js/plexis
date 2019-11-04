/*
 * @description Compares input text as humans do.
 * @param {String} first
 * @param {String} second
 * @returns {Integer}
 * @example
 * compare('', '') // => 0
 * compare('A', 'a') // => 1
 * compare('A', 'b') // => 1
 * compare('A woman', 'a woman') // => 1
 * compare('b', 'B') // => -1
 * compare('C', 'b') // => -1
 * compare('Qux20', 'Qux5') // => -1
 * compare('Qux10', 'Qux11') // => 1
 */
const compare = (first, second) => {
  return second.localeCompare(first, undefined, {
    numeric: true,
    sensitivity: 'case',
    caseFirst: 'upper'
  });
};

export default compare;
