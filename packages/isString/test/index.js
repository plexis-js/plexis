import isString from '../src';

describe('isString', () => {
  it('returns false for non-strings', () => {
    const nonStrings = [5, false, true, null, undefined, {}, [1, 2], []];

    nonStrings.forEach(param => {
      expect(isString(param)).toBe(false);
    });
  });

  it('returns true for strings', () => {
    const strings = [
      'Foo',
      '',
      false.toString(),
      (1).toString(),
      {foo: 'bar'}.toString(),
      [1, 2, 3, 4].toString()
    ];

    strings.forEach(param => {
      expect(isString(param)).toBe(true);
    });
  });
});
