import compare from '../src';

it('Should compare strings naturally', () => {
  expect(compare('', '')).toBe(0);
  expect(compare('A', 'a')).toBe(1);
  expect(compare('A', 'b')).toBe(1);
  expect(compare('A woman', 'a woman')).toBe(1);
  expect(compare('b', 'B')).toBe(-1);
  expect(compare('C', 'b')).toBe(-1);
  expect(compare('Qux20', 'Qux5')).toBe(-1);
  expect(compare('Qux10', 'Qux11')).toBe(1);
});
