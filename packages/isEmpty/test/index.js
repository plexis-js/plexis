import isEmpty from '../src/';

it('check empty string', () => {
  expect(isEmpty('')).toBe(true);
});

it('check string with spaces', () => {
  expect(isEmpty('  ')).toBe(true);
});

it('check string ith spaces and character', () => {
  expect(isEmpty(' b  ')).toBe(false);
});

it('check string with characters', () => {
  expect(isEmpty('Hello')).toBe(false);
});
