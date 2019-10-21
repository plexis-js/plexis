import isLowerCase from '../src';

it('check a uppercase string', () => {
  expect(isLowerCase('HELLO')).toBe(false);
});

it('check a lowercase with spaces string', () => {
  expect(isLowerCase('foo bar')).toBe(true);
});

it('check a lowercase string', () => {
  expect(isLowerCase('hello')).toBe(true);
});

it('check a lowercase string with an uppercase char in the middle', () => {
  expect(isLowerCase('hello Foo bar')).toBe(false);
});
