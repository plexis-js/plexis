import toLower from '../src';

describe('toLower', () => {
  it('lowercases only the first letter in single word', () => {
    expect(toLower('HeLLo', false)).toBe('heLLo');
  });

  it('lowercases only the first letter in multiword sentence', () => {
    expect(toLower('HeLLo WorLD', false)).toBe('heLLo WorLD');
  });

  it('lowercases all single word letters', () => {
    expect(toLower('HeLLo', true)).toBe('hello');
  });

  it('lowercases all multiword sentence letters', () => {
    expect(toLower('HeLLo WorLD', true)).toBe('hello world');
  });
});
