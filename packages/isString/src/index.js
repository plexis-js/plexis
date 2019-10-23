/**
 * @description Checks whether the input is a string primitive type.
 * @param {String} param
 * @returns {Boolean}
 * @example
 * isString('Foo') // returns 'true'
 * isString(1) // returns 'false'
 * isString(null) // returns 'false'
 */
const isString = param => typeof param === 'string';

export default isString;
