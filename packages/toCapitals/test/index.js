import toCapitals from '../src';

describe('@plexis/to-capitals', () => {
  it('no params, should be empty string', () => {
    expect(toCapitals()).toBe('');
  });

  it('empty string,, should be empty strin', () => {
    expect(toCapitals('')).toBe('');
  });

  it('should capitalize only first letter, the rest of the string must be intact', () => {
    expect(toCapitals('foO bar')).toBe('FoO bar');
  });

  it('should capitalize only first letter, the rest of the string must be intact', () => {
    expect(toCapitals('foO bAr')).toBe('FoO bAr');
  });

  it('should capitalize the first letter, the rest of the subject to lower case.', () => {
    expect(toCapitals('FOO BAR', true)).toBe('Foo bar');
  });
});
