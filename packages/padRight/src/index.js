/**
 * @description Returns a string padded with a delimiter string, applied in the end of the string.
 * @param {String} string
 * @param {Number} padLength
 * @param {String} padDelimiter
 * @example
 * padRight('Foo Bar', 1); // => 'Foo Bar'
 * padRight('Foo Bar', 7); // => 'Foo Bar'
 * padRight('Foo Bar', 8) // => 'Foo Bar '
 * padRight('Foo Bar', 10, '*' // => 'Foo Bar***'
 * padRight('Foo Bar', 9, '123') // => 'Foo Bar12'
 */

const padRight = (string, padLength, padDelimiter = ' ') => {
  const padLengthDiff = padLength - string.length;
  if (padLengthDiff <= 0) {
    return string;
  }

  const padDelimeterTimes = Math.ceil(padLengthDiff / padDelimiter.length);

  const padDelimeterArray = [];
  for (let i = 0; i < padDelimeterTimes; i++) {
    const nextPadDelimeterLengthDiff = (i + 1) * padDelimiter.length - padLengthDiff;
    const currentPadDelimiter =
      nextPadDelimeterLengthDiff > 0
        ? padDelimiter.slice(0, padDelimiter.length - nextPadDelimeterLengthDiff)
        : padDelimiter;
    padDelimeterArray.push(currentPadDelimiter);
  }

  return `${string}${padDelimeterArray.join('')}`;
};

export default padRight;
