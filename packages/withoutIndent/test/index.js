import withoutIndent from '../src';

it('removes an indent from the front', () => {
  expect(withoutIndent('\tHello')).toBe('Hello');
  expect(withoutIndent('\rHello')).toBe('Hello');
  expect(withoutIndent(' Hello')).toBe('Hello');
});

it("doesn't remove newline characters", () => {
    expect(withoutIndent('\nHello')).toBe('\nHello');
});

it("doesn't remove anything when there's no indent", () => {
  expect(withoutIndent('Hello')).toBe('Hello');
});

it('removes multiple indents.', () => {
  expect(withoutIndent('\t\t\tHello')).toBe('Hello');
});

it('removes indents on multiple lines', () => {
  expect(withoutIndent('\t\tHello\n\t\tWorld')).toBe('Hello\nWorld');
});

it("doesn't remove indents that aren't at the beginning of a line.", () => {
  expect(withoutIndent('Hello\t')).toBe('Hello\t');
});

it('removes only specified amount of indents', () => {
  expect(withoutIndent('\t\t\t\tHello', 3)).toBe('\tHello');
});

it("doesn't remove extra characters when amount specified exceeds indents", () => {
  expect(withoutIndent('\t\tHello', 3)).toBe('Hello');
});

it("doesn't remove indents when 0 is given as amount", () => {
  expect(withoutIndent('\tHello', 0)).toBe('\tHello');
});

it('removes a mix of different indent characters', () => {
  expect(withoutIndent('\t \rHello')).toBe('Hello');
});
