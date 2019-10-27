import isAlpha from '../src';

describe('isAlpha function', () => {
  it('should return false for an empty string', () => {
    expect(isAlpha('')).toBe(false);
  });

  it('should return false for a numeric input regardless of type', () => {
    expect(isAlpha(1)).toBe(false);
    expect(isAlpha('1')).toBe(false);
    expect(isAlpha({1: '1'})).toBe(false);
  });

  it('should return true for a single word', () => {
    expect(isAlpha('word')).toBe(true);
  });

  it('should return false for a string with spaces', () => {
    expect(isAlpha('Hello, there')).toBe(false);
  });

  it('should return false for a string with punctuation', () => {
    expect(isAlpha('hey!')).toBe(false);
  });

  it('should return true for an all-alpha string with mixed case', () => {
    expect(isAlpha('wHaTtHeTeSt')).toBe(true);
  });
});
