import toPlural from '../src';

describe('@plexis/to-plural', () => {
  it('converts a given string to its plural form', () => {
    expect(toPlural('example')).toBe('examples');
    expect(toPlural('example', 10)).toBe('examples');
    expect(toPlural('example', 1)).toBe('example');
    expect(toPlural('example', 0)).toBe('examples');
    expect(toPlural('example', -1)).toBe('example');
    expect(toPlural('example', 'examplez', 10)).toBe('examplez');
    expect(toPlural('example', 'examplez', 0)).toBe('examplez');
    expect(toPlural('example', 'examplez', 1)).toBe('example');
    expect(toPlural('example', 'examplez', -1)).toBe('example');
    expect(toPlural('example', 'examplez')).toBe('example');
  });
});
