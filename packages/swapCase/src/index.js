/**
 * @description Changes the case in a string letter-by-letter
 * @param {String} str
 * @example
 * swapCase('String') // returns sTRING
 * swapCase️('1 example 2') // returns 1 EXAMPLE 2
 * swapCase️('hElLo') // returns HeLlO
 */
const swapCase = str => {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str.charAt(i) * 1)) {
      if (str.charAt(i) === str.charAt(i).toLowerCase()) {
        newStr += str.charAt(i).toUpperCase();
      } else {
        newStr += str.charAt(i).toLowerCase();
      }
    } else {
      newStr += str.charAt(i);
    }
  }
  return newStr;
};

export default swapCase;
