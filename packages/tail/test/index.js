import tail from '../src';

it('Extracts the last length characters from the input text', () => {
  expect(tail()).toBe('');
  expect(tail('Hello')).toBe('o');
  expect(tail('Hello', 2)).toBe('lo');
  expect(tail('Hello', 100)).toBe('Hello');
});
