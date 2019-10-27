import toSwap from '../src';

it('Swap only two letters', () => {
  expect(toSwap('ab')).toBe('ba');
});
it('Swap an odd number of letters', () => {
  expect(toSwap('abc')).toBe('bac');
  expect(toSwap('abcd')).toBe('badc');
});
it('Swap with spaces', () => {
  expect(toSwap('a b')).toBe(' ab');
  expect(toSwap('ab cd')).toBe('bac d');
});
