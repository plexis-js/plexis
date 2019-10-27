import swapCase from '../src';

it('swaps a uppercase string', () => {
  expect(swapCase('HELLO')).toBe('hello');
});

it('swaps a mixed lowercase and uppercase with spaces string', () => {
  expect(isUpperCase('Hello World!')).toBe('hELLO wORLD!');
});

it('swaps a lowercase string', () => {
  expect(isUpperCase('hello')).toBe('HELLO');
});

it('swaps a mixed lowercase and uppercase with numbers and symbols string', () => {
  expect(isUpperCase('$This iS a T3St %oF SwApSTRing')).toBe('$tHIS Is A t3sT %Of sWaPstrING');
});
