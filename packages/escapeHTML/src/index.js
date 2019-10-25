/**
 * @description Takes the input text and converts HTML special characters to their entity equivalents.
 * @param {String} text
 * @example
 * escapeHTML('ABCD'); // returns 'ABCD'
 * escapeHtml('<3') // returns '&lt;3'
 * escapeHtml('<p>This is cool</p>') // returns '&lt;p&gt;This is cool&lt;/p&gt;'
 */
const escapeHTML = text => {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return text.replace(/[&<>"']/g, function(m) {
    return map[m];
  });
};

export default escapeHTML;
