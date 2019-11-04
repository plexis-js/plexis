import swapCase from '../src';

describe('@plexis/to-swap-case', () => {
  it('Swap single char', () => {
    expect(swapCase('a')).toBe('A');
    expect(swapCase('B')).toBe('b');
    expect(swapCase('5')).toBe('5');
  });

  it('Swap charters of a sentence', () => {
    expect(swapCase('Hello WORLD')).toBe('hELLO world');
    expect(swapCase('123 toys')).toBe('123 TOYS');
    expect(swapCase('654 À Á Â Ã Ä Å Æ Ç È É Ê ę')).toBe('654 à á â ã ä å æ ç è é ê Ę');
  });
});
