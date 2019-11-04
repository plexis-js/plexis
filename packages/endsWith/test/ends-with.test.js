import endsWith from '../src';

describe('@plexis/ends-with', () => {
  const baseString = 'A normal string';

  it('receives strings as pattern', () => {
    expect(endsWith(baseString, 'string')).toBe(true);
    expect(endsWith(baseString, 'normal')).toBe(false);
  });

  it('receives regex as pattern', () => {
    expect(endsWith(baseString, /strr*[r|i]ng/)).toBe(true);
    expect(endsWith(baseString, /normal\/\s/m)).toBe(false);
  });

  it('takes starting position into consideration for string', () => {
    expect(endsWith(baseString, 'normal', 'A normal'.length)).toBe(true);
    expect(endsWith(baseString, 'string', 'A normal'.length)).toBe(false);
  });

  it('takes starting position into consideration for regex', () => {
    expect(endsWith(baseString, /n.rmal/, 'A normal'.length)).toBe(true);
    expect(endsWith(baseString, /string/, 'A normal'.length)).toBe(false);
  });

  it('is false for non-string and non-regex patterns', () => {
    expect(endsWith(baseString, false)).toBe(false);
  });
});
