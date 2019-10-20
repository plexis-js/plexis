import toLower from '../src';

it('lowercase only the first letter in single word', () => {
  expect(toLower('HeLLo', false)).toBe('heLLo');
});

it('lowercase only the first letter in multiword sentense', () => {
  expect(toLower('HeLLo WorLD', false)).toBe('heLLo WorLD');
});

it('lowercase all single word letters', () => {
  expect(toLower('HeLLo', true)).toBe('hello');
});

it('lowercase all multiword sentense letters', () => {
  expect(toLower('HeLLo WorLD', true)).toBe('hello world');
});
