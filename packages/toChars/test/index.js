import toChars from '../src/index';

it('Given no argument, returns an empty array', () => {
  const result = toChars();
  expect(result).toEqual([]);
});

it('Given an empty string, returns an empty array', () => {
  const result = toChars('');
  expect(result).toEqual([]);
});

it('Given null, returns an empty array', () => {
  const result = toChars(null);
  expect(result).toEqual([]);
});

it('Splits a string into an array', () => {
  const result = toChars('Hello world');
  expect(result).toEqual(['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']);
});

it('Converts an integer into a string', () => {
  const result = toChars(1);
  expect(result).toEqual(['1']);
});

it('Splits numbers into a string Array', () => {
  const result = toChars(2e5);
  expect(result).toEqual(['2', '0', '0', '0', '0', '0']);
});
