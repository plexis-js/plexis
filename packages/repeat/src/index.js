/**
 * Repeats the input text number of times.
 * @param {String} [text] The input text.
 * @returns {Integer} times How many times shall we repeat the text, default to 1
 * @param {String} glue The glue for the output, default to ''
 * @returns {String} The repeated string;
 */
const repeat = (text, repeat = 1, glue = '') => {
  let result = `${text}${glue}`.repeat(repeat);
  if (glue) {
    return result.slice(0, result.length - 1);
  }
  return result;
};

export default repeat;
