'use strict';

import includes from '../src';

describe('@plexis/isNumeric', () => {
  it('no first or second string parameter given', () => {
    expect(includes()).toBe(false);
  });

  it('no second parameter given', () => {
    expect(includes('')).toBe(false);
  });

  it('empty string given for first and second string parameters', () => {
    expect(includes('', '')).toBe(true);
  });

  it('Equal first string and second string parameters', () => {
    expect(includes('Foo', 'Foo')).toBe(true);
  });

  it('Equal first string and second string with starting position of 2', () => {
    expect(includes('Foo', 'Foo', 2)).toBe(false);
  });

  it('Second parameter as substring of first parameter', () => {
    expect(includes('Foo', 'oo')).toBe(true);
  });

  it('Second parameter as substring of first parameter, but substring has different casing', () => {
    expect(includes('Foo', 'Oo')).toBe(false);
  });

  it('Second parameter as non string value', () => {
    expect(includes('Foo', false)).toBe(false);
  });

  it('First parameter as non string value', () => {
    expect(includes(null, 'Foo')).toBe(false);
  });
});
