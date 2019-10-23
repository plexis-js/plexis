import isLowerCase from '../src';

describe('isLowerCase', () => {
  it('returns false for strings containing one or more uppercase characters', () => {
    expect(isLowerCase('HELLO')).toBe(false);
    expect(isLowerCase('A')).toBe(false);
    expect(isLowerCase('WHAT EVER')).toBe(false);
    expect(isLowerCase('Test')).toBe(false);
  });

  it('returns true for all lowercase character strings', () => {
    expect(isLowerCase('foo')).toBe(true);
    expect(isLowerCase('foo bar')).toBe(true);
    expect(isLowerCase('foo bar test123')).toBe(true);
  });
});
