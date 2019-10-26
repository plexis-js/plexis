import toSwapCase from '../src';

it('swap cases', () => {
  expect(toSwapCase('123 HeLLo')).toBe('123 hEllO');
});

it('swap cases', () => {
  expect(toSwapCase('123 HeLLo 123 WorLD')).toBe('123 hEllO 123 wORld');
});

it('swap cases', () => {
  expect(toSwapCase('He2LL1o')).toBe('hE2ll1O');
});

it('swap cases', () => {
  expect(toSwapCase('3728&#HeLLo WorLD3728&#')).toBe('3728&#hEllO wORld3728&#');
});
