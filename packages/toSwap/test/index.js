import toSwap from '../src';

it('Swap only small strings', () => {
  expect(toSwap('ab')).toBe('ba');
  expect(toSwap('a')).toBe('a');
});
it('Swap an odd number of letters', () => {
  expect(toSwap('abc')).toBe('bac');
  expect(toSwap('abcd')).toBe('badc');
});
it('Swap with spaces', () => {
  expect(toSwap('a b')).toBe(' ab');
  expect(toSwap('ab cd')).toBe('bac d');
});
it('Swap Random Characters', () => {
  expect(toSwap('1;3')).toBe(';13');
  expect(toSwap('.,][')).toBe(',.[]');
});
it('Empty string case', () => {
  expect(toSwap('')).toBe('');
});
