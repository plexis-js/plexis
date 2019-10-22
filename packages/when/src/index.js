/**
 * @description This is a sample description
 * @param {Function|Boolean} [checking] A function or condition to check.
 * @param {Function} [func] The function to invoke.
 * @returns {Function} Returns the new composite function.
 * @example
 * when(num => num < 0, () => 0)(-1) // returns 0
 */
const when = (checking, func) => value => {
  if (checking === true || (typeof checking === 'function' && checking(value))) {
    return func(value);
  }
  return value;
};

export default when;
