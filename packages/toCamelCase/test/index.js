import toCamelCase from '../src';

it('converts a given string to camel case', () => {
  expect(toCamelCase('Cool')).toBe('cool');
  expect(toCamelCase('cool mate')).toBe('coolMate');
  expect(toCamelCase('Hey how are you today?')).toBe('heyHowAreYouToday');
  expect(toCamelCase('PascalCase')).toBe('pascalCase');
  expect(toCamelCase('kebab-case')).toBe('kebabCase');
  expect(toCamelCase('')).toBe('');
  expect(toCamelCase('      ')).toBe('');
  expect(toCamelCase(' kebab-case PascalCase @hello!  ')).toBe('kebabCasePascalCaseHello');
});
