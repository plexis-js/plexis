import startsWith from '../src';

it('Matches single characters', () => {
  expect(startsWith('Hello', 'H')).toBe(true);
});

it("Doesn't match single characters not at front of string", () => {
  expect(startsWith('Hello', 'l')).toBe(false);
});

it('Matches single characters with startingPosition set at character index', () => {
  expect(startsWith('Help', 'l', 2)).toBe(true);
});

it('Matches single word strings', () => {
  expect(startsWith('Hello there champ!', 'Hello')).toBe(true);
});

it("Doesn't match single word strings not at front of string", () => {
  expect(startsWith('Hello there champ!', 'there')).toBe(false);
});

it('Matches single word strings with startingPosition set at word index', () => {
  expect(startsWith('Hello there champ!', 'there', 6)).toBe(true);
});

it('Matches single character regex', () => {
  expect(startsWith('@plexis is great!', /[@]/)).toBe(true);
});

it("Doesn't match single character regex not at front of string", () => {
  expect(startsWith('@plexis is great!', /[!]/)).toBe(false);
});

it('Matches single word string', () => {
  expect(startsWith('@plexis is great!', /is/, 8)).toBe(true);
});

it('Matches complex regex(HTML tag)', () => {
  expect(startsWith('<td>Table Cell</td>', /<([\w]+).*>(.*?)<\/\1>/)).toBe(true);
});
