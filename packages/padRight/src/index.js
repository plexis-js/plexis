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
