/**
 * @description Calculates the Levenshtein Distance toStretween two strings
 * @param {String} [fromStr]
 * @param {String} [toStr]
 * @returns {Number} The Levenshtein distance
 * @example
 * distance('book', 'back') // returns 2
 * distance('black', 'back') // returns 1
 * distance('Foo', 'Bar') // returns 3
 */
const distance = (fromStr, toStr) => {
  if (typeof fromStr !== 'string' || typeof toStr !== 'string') return 0;
  if (fromStr.length === 0) return toStr.length;
  if (toStr.length === 0) return fromStr.length;

  if (fromStr.length > toStr.length) {
    let tmp = fromStr;
    fromStr = toStr;
    toStr = tmp;
  }

  let row = Array(fromStr.length);
  let i;
  let prev;
  let val;

  for (i = 0; i <= fromStr.length; i++) {
    row[i] = i;
  }

  for (i = 1; i <= toStr.length; i++) {
    prev = i;
    for (var j = 1; j <= fromStr.length; j++) {
      if (toStr[i - 1] === fromStr[j - 1]) {
        val = row[j - 1];
      } else {
        val = Math.min(row[j - 1] + 1, prev + 1, row[j] + 1);
      }
      row[j - 1] = prev;
      prev = val;
    }
    row[fromStr.length] = prev;
  }
  return row[fromStr.length];
};

export default distance;
