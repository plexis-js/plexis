import isUpperCase from '../src';

describe('isUpperCase', () => {
  it('returns false for strings containing one or more lowercase characters', () => {
    expect(isUpperCase('hELLO')).toBe(false);
    expect(isUpperCase('a')).toBe(false);
    expect(isUpperCase('wHAT EVER')).toBe(false);
    expect(isUpperCase('tEST')).toBe(false);
  });

  it('returns true for all uppercase character strings', () => {
    expect(isUpperCase('FOO')).toBe(true);
    expect(isUpperCase('FOO BAR')).toBe(true);
    expect(isUpperCase('FOO BAR TEST123')).toBe(true);
  });
});
