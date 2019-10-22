const composeTwo = (f, g) => (...x) =>
  Reflect.apply(f, undefined, [Reflect.apply(g, undefined, x)]);

/**
 * Compose two or more functions
 * @param {Function[]} args Array of Function
 * @returns {Function} Returns the new composite function.
 * @example
 * const inc = x => x + 1;
 * const add = (x, y) => x + y;
 * const ops = compose(inc, x => add(x, 2));
 *
 * ops(1); // returns 4;
 * ops(10); // returns 13;
 */
const compose = (...args) => args.reduce(composeTwo);

export default compose;
