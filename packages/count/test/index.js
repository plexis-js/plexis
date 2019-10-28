import count from '../src';

describe('@plexis/count', () => {
  it('no first or second parameter given', () => {
    expect(count()).toBe(0);
  });

  it('empty string given and no validator for second parameter', () => {
    expect(count('')).toBe(0);
  });

  it('no empty string given for first and no validator for second parameter ', () => {
    expect(count('Foo bar')).toBe(7);
  });

  it('no empty string given for first and  validator for no spaces as second parameter', () => {
    expect(count('Foo bar   ', char => char != ' ')).toBe(6);
  });
});