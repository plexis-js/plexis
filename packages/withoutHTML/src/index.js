/**
 * @description Remove HTML tags from the input text
 * @param {String} text
 * @returns {String} text without HTML
 * @example
 * withoutHTML('Hello world') => 'Hello world'
 * withoutHTML('<p>Hello</p> world') => ' world'
 * withoutHTML('<p Hello world') => '<p Hello world'
 * withoutHTML('<p id="">Hello world</p>') => ''
 * withoutHTML('<p id="" Hello world</p> <b></b> from the underground ') => ' from the underground'
 */

const withoutHTML = string => {
  const wordPatt = /[^>]+>/g;
  const stringWithOutHtml = string.replace(wordPatt, '');

  return stringWithOutHtml;
};

export default withoutHTML;
