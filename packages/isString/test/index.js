import isString from '../src';

it('returns false for non-string types', () => {
  const nonStrings = [5, false, true, null, undefined, {}, [1, 2], []];

  nonStrings.forEach(param => {
    expect(isString(param)).toBe(false);
  });
});

it('returns true for string type', () => {
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
