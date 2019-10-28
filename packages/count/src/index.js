/**
 * @description This is a sample description
 * @param {String} text
 * @param (Function) validator, validates if a character should be count or not
 * @example
 * count('b') // returns 1
 * count('Foo') // returns 3
 * count('Foo bar') // returns 7
 * count('Foo bar  ', char => char != ' ') //returns 6
 * 
 */
const count = (text, validator) => {
  let strLen = text ? text.length : 0;

  if (typeof validator == 'function')
  {
    strLen = 0;
    text.split('').map(letter => {
      strLen += validator(letter) ? 1 : 0;
    });
  }

  return strLen;
}

export default count;
