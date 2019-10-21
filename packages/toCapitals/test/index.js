import toCapitals from '../src';

it('uppercase only the first letter in single word', () => {
  expect(toCapitals('heLLo', false)).toBe('HeLLo');
});

it('uppercase only the first letter in multiword sentense', () => {
  expect(toCapitals('heLLo WorLD', false)).toBe('HeLLo WorLD');
});

it('capitalize single word', () => {
  expect(toCapitals('HeLLo', true)).toBe('Hello');
});

it('capitalize all multiword sentense letters', () => {
  expect(toCapitals('HeLLo WorLD', true)).toBe('Hello world');
});
