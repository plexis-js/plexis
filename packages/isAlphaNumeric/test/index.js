import isAlphaNumeric from '../src';

it('should return true for a string of alphabetical characters (upper- and lower-case)', () => {
  expect(isAlphaNumeric('fooBAR')).toBe(true);
});

it('should return true for a string of numeric characters', () => {
  expect(isAlphaNumeric('123')).toBe(true);
});

it('should return true for a string of alphabetical and numeric characters', () => {
  expect(isAlphaNumeric('fooBAR123')).toBe(true);
});

it('should return false for strings with non-numeric characters', () => {
  expect(isAlphaNumeric('!')).toBe(false);
  expect(isAlphaNumeric('@')).toBe(false);
  expect(isAlphaNumeric('.')).toBe(false);
  expect(isAlphaNumeric(' ')).toBe(false);
  expect(isAlphaNumeric('-')).toBe(false);
  expect(isAlphaNumeric('_')).toBe(false);
  expect(isAlphaNumeric('=')).toBe(false);
  expect(isAlphaNumeric('+')).toBe(false);
  expect(isAlphaNumeric('(')).toBe(false);
  expect(isAlphaNumeric('^')).toBe(false);
  expect(isAlphaNumeric('ä')).toBe(false);
});

it('should return false for an empty string', () => {
  expect(isAlphaNumeric('')).toBe(false);
});

it('should return false for inputs that are not strings', () => {
  expect(isAlphaNumeric(0)).toBe(false);
  expect(isAlphaNumeric(1.5)).toBe(false);
  expect(isAlphaNumeric(true)).toBe(false);
  expect(isAlphaNumeric(null)).toBe(false);
  expect(isAlphaNumeric(undefined)).toBe(false);
  expect(isAlphaNumeric({foo: 'bar'})).toBe(false);
  expect(isAlphaNumeric(['foo', 'bar'])).toBe(false);
});
