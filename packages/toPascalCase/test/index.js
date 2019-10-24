import toPascalCase from '../src';

it('Works with single characters', () => {
  expect(toPascalCase('h')).toBe('H');
});

it("Works will full words", () => {
  expect(toPascalCase('hello')).toBe('Hello');
});

it('Works with strange cases on a single word', () => {
  expect(toPascalCase('hEllO')).toBe('HEllO');
});

it('Works with multiple words', () => {
  expect(toPascalCase('Hello there')).toBe('HelloThere');
});

it("Removes symbols", () => {
  expect(toPascalCase('@@@hello@@@')).toBe('Hello');
});

it("Works with long strings", () => {
  expect(toPascalCase('This is a long string compared to the other tests')).toBe('ThisIsALongStringComparedToTheOtherTests')
})

it("Converts camelCase properly", () => {
  expect(toPascalCase('camelCase')).toBe('CamelCase');
})

it("Converts kebab-case properly", () => {
  expect(toPascalCase('kebab-case')).toBe('KebabCase');
})