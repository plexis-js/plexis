'use strict';

export default swapCase = input => {
  let text = input.toString().split('');

  return text
    .map(c => {
      let lowerC = c.toLocaleLowerCase();
      return lowerC === c ? c.toLocaleUpperCase() : lowerC;
    })
    .join('');
};
