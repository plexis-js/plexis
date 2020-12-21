'use strict';

import padRight from '../src';

it('Pad given string with given (or whiteSpace as default) string to reach requested size | 1', () => {
  const result = padRight('Foo Bar', 1);
  expect(result).toBe('Foo Bar');
});
it('Pad given string with given (or whiteSpace as default) string to reach requested size | 8', () => {
  const result = padRight('Foo Bar', 8);
  expect(result).toBe('Foo Bar ');
});
it('Pad given string with given (or whiteSpace as default) string to reach requested size | 8, *', () => {
  const result = padRight('Foo Bar', 8, '*');
  expect(result).toBe('Foo Bar*');
});
it('Pad given string with given (or whiteSpace as default) string to reach requested size | 10, *', () => {
  const result = padRight('Foo Bar', 10, '*');
  expect(result).toBe('Foo Bar***');
});
it('Pad given string with given (or whiteSpace as default) string to reach requested size | 10, 123', () => {
  const result = padRight('Foo Bar', 10, '123');
  expect(result).toBe('Foo Bar123');
});
it('Pad given string with given (or whiteSpace as default) string to reach requested size | 9, 123', () => {
  const result = padRight('Foo Bar', 9, '123');
  expect(result).toBe('Foo Bar12');
});
