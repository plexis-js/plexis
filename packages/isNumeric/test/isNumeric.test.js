'use strict';

import isNumeric from '../src';

describe('@plexis/isNumeric', () => {
  it('check a valid numeric value `1000` ', () => {
    expect(isNumeric('1000')).toBe(true);
  });

  it('test if Infinity is a valid number', () => {
    expect(isNumeric('Infinity')).toBe(true);
  });

  it('test against a negative numeric value', () => {
    expect(isNumeric('-100.4')).toBe(true);
  });

  it('test against a number in exponent shorthand', () => {
    expect(isNumeric('1E+2')).toBe(true);
  });

  it('test against a hex number', () => {
    expect(isNumeric('0xFF')).toBe(true);
  });

  it('test against a dash', () => {
    expect(isNumeric('-')).toBe(false);
  });

  it('test against a string representation of a number', () => {
    expect(isNumeric('one')).toBe(false);
  });

  it('test against a number', () => {
    expect(isNumeric(100)).toBe(true);
  });
});
