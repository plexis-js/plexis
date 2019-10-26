/**
 * @description
 * @param text
 * @returns {string}
 * @constructor
 */
const swapCase = text => {
  let new_string = '';

  for (let char of text) {
    if (/^[a-zA-Z]+$/.test(char)) {
      new_string += char.toUpperCase() !== char ? char.toUpperCase() : char.toLowerCase();
    } else {
      new_string += char;
    }
  }
  return new_string;
};

export default swapCase;
