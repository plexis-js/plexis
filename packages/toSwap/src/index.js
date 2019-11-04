/**
 * @description Swaps every character in a string, until the end of the string
 * @param {String} string
 * @example
 * toSwap('ab') // returns 'ab'
 * toSwap('a b') // returns ' ab'
 * toSwap('abcd') // returns 'badc'
 * @returns {String} reordered letters
 */
const toSwap = string => {
  var arr = string.split('');
  arr.forEach((current, index, array) => {
    if (index % 2 == 0) {
      array[index] = array[index + 1];
      array[index + 1] = current;
    }
  });
  return arr.join('');
};

export default toSwap;
