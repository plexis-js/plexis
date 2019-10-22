/**
 * @description Cleanups a string from HTML tags.
 * @param {String} text
 * @example
 * withoutDiacritics('<b>Test</b>') // returns 'Test'
 */

function removeHTML(ogstr)
{
   if ((ogstr===null) || (ogstr===''))
       return false;
  else
   ogstr = ogstr.toString();
  return ogstr.replace(/<[^>]*>/g, '');
}
 
const withoutHTML = text => removeHTML(text);

export default withoutHTML;
