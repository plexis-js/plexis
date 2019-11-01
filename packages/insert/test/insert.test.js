'use strict';

import insert from '../src';
describe('@plexis/to-human', () => {
  it('returns an empty string', () => {
    expect(insert()).toBe('');
    expect(insert('')).toBe('');
    expect(insert('', '')).toBe('');
    expect(insert('', '', 0)).toBe('');
    expect(insert('', '', 100)).toBe('');
  });

  it('returns the same input', () => {
    expect(insert('foo bar')).toBe('foo bar');
    expect(insert('foo bar', '')).toBe('foo bar');
    expect(insert('foo bar', '', 100)).toBe('foo bar');
  });

  it('return the input with inserted text at the end', () => {
    expect(insert('foo ba', 'r', 6)).toBe('foo bar');
    expect(insert('foo ba', 'r', 100)).toBe('foo bar');
    expect(insert('foo ba', 'r', -100)).toBe('foo bar');
  });

  it('return the input with inserted text at n position', () => {
    expect(insert('foo br', 'a', 5)).toBe('foo bar');
    expect(insert('foo ba', 'r', 100)).toBe('foo bar');
    expect(insert('foo ba', 'r', -100)).toBe('foo bar');
    expect(insert('oo bar', 'f', 0)).toBe('foo bar');
  });
});
