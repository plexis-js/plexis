import isNumeric from '../src';

it('check number strings', () => {
  expect(isNumeric('1')).toBe(true);
  expect(isNumeric('0')).toBe(true);
  expect(isNumeric('14873905')).toBe(true);
  expect(isNumeric('-124')).toBe(true);
});

it('check an "Infinity" string', () => {
  expect(isNumeric('Infinity')).toBe(true);
});

it('check float strings', () => {
  expect(isNumeric('0.1')).toBe(true);
  expect(isNumeric('.1')).toBe(true);
  expect(isNumeric('1.12')).toBe(true);
  expect(isNumeric('1.e2')).toBe(true);
  expect(isNumeric('1.e-2')).toBe(true);
  expect(isNumeric('1.E2')).toBe(true);
  expect(isNumeric('1E+2')).toBe(true);
  expect(isNumeric('1E-2')).toBe(true);
});

it('check hexdecimal strings', () => {
  expect(isNumeric('0xFFAA11')).toBe(true);
  expect(isNumeric('0x11')).toBe(true);
  expect(isNumeric('0xffbb11')).toBe(true);
});

it('check invalid strings', () => {
  expect(isNumeric('aga2152sdg')).toBe(false);
  expect(isNumeric('1240x11ds')).toBe(false);
  expect(isNumeric('-')).toBe(false);
  expect(isNumeric('.')).toBe(false);
  expect(isNumeric('0x')).toBe(false);
  expect(isNumeric('')).toBe(false);
  expect(isNumeric(' ')).toBe(false);
  expect(isNumeric('one')).toBe(false);
});
