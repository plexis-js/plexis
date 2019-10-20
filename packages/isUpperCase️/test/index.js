import isUpperCase from '../src';

it('check a uppercase string', () => {
  expect(isUpperCase('HELLO')).toBe(true);
});

it('check a uppercase with spaces string', () => {
  expect(isUpperCase('HELLO FOO BAR')).toBe(true);
});

it('check a lowercase string', () => {
  expect(isUpperCase('hello')).toBe(false);
});

it('check a lowercase string with an uppercase char in the middle', () => {
  expect(isUpperCase('HELLO FOo BAR')).toBe(false);
});
