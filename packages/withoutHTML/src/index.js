/**
 * @description Cleanups a string from HTML tags.
 * @param {String} text
 * @example
 * withoutHTML('<b>Test</b>') // returns 'Test'
 */
 
const withoutHTML = text => {return null!==text&&""!==text&&(text=text.toString()).replace(/<[^>]*>/g,"")};

export default withoutHTML;
