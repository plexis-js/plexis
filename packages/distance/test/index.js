import distance from '../src';

describe('distance', () => {
  it('Should calculate Levenshtein Distance between two strings', () => {
    expect(distance('book', 'back')).toBe(2);
    expect(distance('black', 'back')).toBe(1);
    expect(distance('Foo', 'Bar')).toBe(3);
    expect(distance('cool', 'cool')).toBe(0);
    expect(distance('There was a black cat', 'There was a black dog')).toBe(3);
    expect(distance('!@#$', '!@#$')).toBe(0);
    expect(distance('<table>', '<td>')).toBe(4);
  });

  it('Should return the same Levenshtein Distance for the same strings', () => {
    expect(distance('flaw', 'lawn')).toBe(2);
    expect(distance('lawn', 'flaw')).toBe(2);
    expect(distance('encyclopedia', 'cat')).toBe(11);
    expect(distance('cat', 'encyclopedia')).toBe(11);
  });

  it('Should return a Levenshtein Distance of 0 for non-strings', () => {
    expect(distance(x => 0, 'back')).toBe(0);
    expect(distance(9, 'back')).toBe(0);
    expect(distance(45, 0)).toBe(0);
  });

  it('Should return a number', () => {
    expect(typeof distance('book', 'back')).toBe('number');
  });
});
