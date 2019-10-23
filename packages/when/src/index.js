/**
 * @description Is used for checking and chaining within the composition for supercharged functions.
 * @param {Function|Boolean} [checking] A function or condition to check.
 * @param {Function} [func] The function to invoke.
 * @returns {Function} Returns the new composite function.
 * @example
 * _when(num => num < 0, () => 0)(-1) // returns 0
 */
const _when = (checking, func) => value => {
  if (checking === true || (typeof checking === 'function' && checking(value))) {
    return func(value);
  }
  return value;
};

export default _when;
