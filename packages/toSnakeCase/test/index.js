import toSnakeCase from '../src';

it('converts a given string to snake case', () => {
  expect(toSnakeCase('Cool')).toBe('cool');
  expect(toSnakeCase('cool mate')).toBe('cool_mate');
  expect(toSnakeCase('Hey how are you today?')).toBe('hey_how_are_you_today');
  expect(toSnakeCase('PascalCase')).toBe('pascal_case');
  expect(toSnakeCase('kebab-case')).toBe('kebab_case');
});
